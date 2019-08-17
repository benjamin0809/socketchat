##special table: hupuImages
let createTable = `CREATE TABLE IF NOT EXISTS hupuImages(
   id BIGINT NOT NULL,
   articleid BIGINT NOT NULL,
   title VARCHAR(256) NOT NULL,
   avatar VARCHAR(128) NOT NULL,
   username VARCHAR(40) NOT NULL, 
   images text,
   sourceUrl VARCHAR(256),
   createTime VARCHAR(40) NOT NULL,
   articleTime VARCHAR(32) NOT NULL,
   modifiedTime VARCHAR(40) NULL,
   PRIMARY KEY ( id )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;`


##special table: file
let createTable = `CREATE TABLE IF NOT EXISTS file(
   id BIGINT NOT NULL,
   masterid BIGINT NOT NULL,
   filename VARCHAR(256) NOT NULL,
   fileSize BIGINT,
   path VARCHAR(128) NOT NULL,
   fullpath VARCHAR(128) NOT NULL, 
   filetype VARCHAR(40) NOT NULL,
   sourceUrl VARCHAR(256),
   extra VARCHAR,
   width INT,
   height INT,
   createTime VARCHAR(40) NOT NULL, 
   modifiedTime VARCHAR(40) NULL,
   PRIMARY KEY ( id ) ,UNIQUE INDEX 
)ENGINE=InnoDB DEFAULT CHARSET=utf8;`