
const sqlUtils = require('../../database/sql.utils.js')
const utils = require('../../utils/utils')

class UserDao {
    constructor() {
        this.sqlUtils = new sqlUtils()
    }

    getUser(userid) {
        let sql = `SELECT * from user where id = ?`
        let params = [userid]
        return this.sqlUtils.queryWithParams(sql, params);
    }


    login(account, password) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT id from user where account = ?`
            let params = [account]
            this.sqlUtils.queryWithParams(sql, params).then(res => {
                if (res.length > 0) {
                    let sql1 = `SELECT id from user where account = ? and password = ?`
                    let params1 = [account, password];
                    this.sqlUtils.queryWithParams(sql1, params1).then(result => {
                        if (result.length > 0) {
                            resolve({ errcode: 0, message: 'logined',data : { userId: result[0].id } })
                        } else {
                            reject({ errcode: 1003, message: 'password is not correct' })
                        }
                    })
                } else {
                    reject({ errcode: 1002, message: 'account is not exist' })
                }
            }).catch(err => {
                reject({ errcode: 1001, message: 'login failed', error: err })
            });
        })
    }

    register(account, password, nickname) {
        const id = utils.genereateId()

        const sql = `insert into user (id, account, password,nickname) VALUES (?, ?, ?, ?);`
        const params = []
        params.push(id)
        params.push(account)
        params.push(password)
        params.push(nickname)

        let sql1 = `SELECT id from user where account = ?`
        let params1 = [account]

        return new Promise((resolve, reject) => { 
            this.sqlUtils.queryWithParams(sql1, params1).then(result1 => {
                if (result1.length > 0) {
                    reject({ errcode: 1004, message: 'account is exist' }) 
                } else {
                    this.sqlUtils.queryWithParams(sql, params).then(result => {
                        if (result.affectedRows > 0) {
                            resolve({ errcode: 0, message: 'register success', data: { userId : id} })
                        } else {
                            reject({ errcode: 1003, message: 'unknown' })
                        }
                    }).catch(e =>{
                        reject(e )
                    })
                }
            })
           
        })
    }

    logout(account, password) {
    }

    updateUser(account, password) {
    }

}


module.exports = UserDao