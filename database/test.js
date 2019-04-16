const sql = require('./sql.utils.js');


let createTable = `CREATE TABLE IF NOT EXISTS hupuImages(
    id BIGINT NOT NULL,
    articleid BIGINT NOT NULL,
    title VARCHAR(256) NOT NULL,
    avatar VARCHAR(128) NOT NULL, 
    username VARCHAR(40) NOT NULL,
    images text,
    sourceUrl VARCHAR(256),
    createTime VARCHAR(40) NOT NULL,
    modifiedTime VARCHAR(40) NULL,
    PRIMARY KEY ( id )
 )ENGINE=InnoDB DEFAULT CHARSET=utf8;`




 new sql().query(`select * from hupuImages`).then(res=>{
        console.log(res)
    })
 
    // new sql().query('drop table hupuImages')

    
    // new sql().query(createTable).then(res=>{
    //     console.log(res)
    // }).catch(error=>{
    //     console.log(error)
    // })
    
   
   
   