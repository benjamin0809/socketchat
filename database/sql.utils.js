var mysql = require('./sql.service.js') 

var connection = mysql.connection;
var pool = mysql.pool;
var query1 = function(sql){
    // console.log(sql) 
    // console.log(connection)
    return new Promise((resolve, reject) => {
        connection.query(sql,function(error, results, fields){
            if (error) {
                reject(error)
            }else{
                resolve(results)  
            } 
        })   
    });  
}

var query = function(sql){
    return new Promise((resolve, reject) => {
        pool.getConnection((error,connection)=>{
            if(error)reject(error)
            connection.query(sql,function(error, results, fields){
                if (error) {
                    reject(error)
                }else{
                    resolve(results)  
                } 
                connection.release()
            })  
        })
    })
}

var queryWithParams = function(sql, params){
    return new Promise((resolve, reject) => {
        pool.getConnection((error,connection)=>{
            if(error)reject(error)
            connection.query(sql,params,function(error, results, fields){
                if (error) {
                    reject(error)
                }else{
                    resolve(results)  
                } 
                connection.release()
            })  
        })
    })
}

var execute = function(sql, params){
    return new Promise((resolve, reject) => {
        pool.getConnection((error,connection)=>{
            if(error)reject(error)
            connection.query(sql,params,function(error, results, fields){
                if (error) {
                    reject(error)
                }else{
                    resolve(results)  
                } 
                connection.release()
            })  
        })
    })
}

/**
 * sqlArr: [{sql: string, params: []}]
 */
var transaction = function(sqlArr){
    return new Promise((resolve,reject)=>{
        pool.getConnection((error,pool_connection)=>{
            if(error){
                reject(error);
                return;
            }
            pool_connection.beginTransaction((err)=>{
                if(err) {
                    reject(err);
                }
                for(let i = 0; i < sqlArr.length ; i++){
                    execute(sqlArr[i].sql,sqlArr[i].params).catch(err=>{
                        pool_connection.rollback(() => reject(err))
                    })
                }
                pool_connection.commit(err=>{
                    if(err){
                        pool_connection.rollback(() => reject(err))
                    }else{
                        resolve(true)
                    }
                }) 
                pool_connection.release()
            })
        })
    })
}
module.exports = {
    query: query,
    query1: query1,
    transaction: transaction,
    queryWithParams: queryWithParams
}