const mysql = require('./sql.service.js') 
 
class sql{
    constructor(){
        this.SqlService = new mysql()
        this.connection = this.SqlService.getConnection();
        this.pool = this.SqlService.getPool();
    } 
    query1(sql){ 
        return new Promise((resolve, reject) => {
            this.connection.query(sql,function(error, results, fields){
                if (error) {
                    reject(error)
                }else{
                    resolve(results)  
                } 
            })   
        });  
    }
    
    query(sql){
        return new Promise((resolve, reject) => {
            this.pool.getConnection((error,connection)=>{
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
    
    queryWithParams(sql, params){
        return new Promise((resolve, reject) => {
            this.pool.getConnection((error,connection)=>{
                if(error){
                    reject(error)
                    return
                }
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
    
    insert(tableName, model, entity){
        let params = []
        let columns = model

        let col, question;
        for (let [index, item] of columns.entries()) {
            if(item.require && !entity[item.key]){
                throw new Error(item.key + " is reqiure")
            }
            if (index == 0) {
                col = item.key;
                question = '?'
            } else {
                col += ',' + item.key;
                question += ',?'
            }

            let param = null
            if(entity[item.key]){
                param = entity[item.key]
            }else if(item.default || item.default === 0){
                param = item.default
            }
            params.push(param)
        }
        let sql = `REPLACE INTO ${tableName} (${
            col }
        ) VALUES (${question})`
        return this.queryWithParams(sql, params)
    }
    execute(sql, params){
        return new Promise((resolve, reject) => {
            this.pool.getConnection((error,connection)=>{
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
    transaction(sqlArr){
        return new Promise((resolve,reject)=>{
            this.pool.getConnection((error,pool_connection)=>{
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
}

module.exports = sql