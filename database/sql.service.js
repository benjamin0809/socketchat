var mysql = require('mysql')
var config = require('../config/dev.conf')
var connection = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    multipleStatements: config.db.multipleStatements
})

var pool = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    multipleStatements: config.db.multipleStatements
})

module.exports = {
    connection: connection,
    pool: pool
} ;
