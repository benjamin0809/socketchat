const sql = require('mssql');
 
const config = {
  user: 'sa',
  password: 'Fih123456 ',
  server: 'localhost\\MSSQLSERVER01', // You can use 'localhost\\instance' to connect to named instance
  database: 'meeting',
};

(async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        // await sql.connect('mssql://sa:Fih123456@localhost/MSSQLSERVER01/meeting')
        await sql.connect(config)
        const result = await sql.query`select * from mytable where id = ${value}`
        console.dir(result)
    } catch (err) {
        // ... error checks
        console.log(err)
    }
})();