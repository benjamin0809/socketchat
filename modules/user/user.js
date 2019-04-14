 
const sqlUtils = require('../../database/sql.utils.js')

const getUser = (userid)=>{
    let sql = `SELECT * from user where id = ?`
    let params = [userid]
    return sqlUtils.queryWithParams(sql, params);
}

const login = (account, password)=>{ 
    return new Promise((resolve,reject)=>{
        let sql = `SELECT id from user where account = ?`
        let params = [account]
        sqlUtils.queryWithParams(sql, params).then(res=>{
            if(res.length > 0){
                let sql1 = `SELECT id from user where account = ? and password = ?`
                let params1 = [account, password];
                sqlUtils.queryWithParams(sql1, params1).then(result=>{
                    if(result.length > 0){
                        resolve({errcode: 0,message:'logined'})
                    }else{
                        reject({errcode: 1003,message:'password is not correct'})
                    }
                })
            }else{
                reject({errcode: 1002,message:'account is not exist'})
            }
        }).catch(err=>{
            reject({errcode: 1001,message:'login failed',error:err})
        });
    })
    
}

const register = (account, password)=>{ 
}

const logout = (account, password)=>{ 
}

const updateUser = (account, password)=>{ 
}

module.exports = {
    getUser: getUser,
    login: login
}