const mysql = require('mysql')
try{
    var connection = mysql.createConnection({
        host: '180.76.169.80',
        user: 'root',
        password: '',
        database: 'base'
    })
    console.log(connection)
}catch(e){ 
    console.log(e)
}