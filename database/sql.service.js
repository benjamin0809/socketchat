const mysql = require('mysql')
const config = require('../config/dev.conf')

class SqlService{
    constructor() {

    }

    getConnection() {
        if (this.connection) {
            return this.connection
        }
        this.connection = mysql.createConnection({
            host: config.db.host,
            user: config.db.user,
            password: config.db.password,
            database: config.db.database,
            multipleStatements: config.db.multipleStatements
        })
        return this.connection

    }

    getPool() { 
        if (this.pool) {
            return this.pool
        }
        this.pool = mysql.createPool({
            host: config.db.host,
            user: config.db.user,
            password: config.db.password,
            database: config.db.database,
            multipleStatements: config.db.multipleStatements
        })
        return this.pool
    }
}


module.exports = SqlService;
