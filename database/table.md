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
   path VARCHAR(256) NOT NULL,
   fullpath VARCHAR(256) NOT NULL, 
   filetype VARCHAR(40) NOT NULL,
   sourceUrl VARCHAR(256),
   extra VARCHAR,
   width INT,
   height INT,
   createTime VARCHAR(40) NOT NULL, 
   modifiedTime VARCHAR(40) NULL,
   PRIMARY KEY ( id ) ,UNIQUE INDEX 
)ENGINE=InnoDB DEFAULT CHARSET=utf8;`

CREATE TABLE if NOT exists `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci,
  `updatetime` time DEFAULT NULL,
  `createtime` time DEFAULT NULL,
  `status` int(11) NOT NULL COMMENT '0: editing;\r\n9: published\r\n-1: reject ',
  PRIMARY KEY (`id`),
  KEY `article_id_IDX` (`id`,`title`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ;

CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci,
  `status` int(11) NOT NULL COMMENT '0: editing;\r\n9: published\r\n-1: reject ',
  `subjectid` int(11) DEFAULT NULL,
  `ispush` int(11) DEFAULT '0',
  `abstract` text COLLATE utf8_unicode_ci,
  `redirecturl` varchar(1024) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bannerurl` varchar(1024) COLLATE utf8_unicode_ci DEFAULT NULL,
  `author` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mediaid` int(11) DEFAULT NULL,
  `readqty` bigint(20) DEFAULT NULL,
  `likeqty` bigint(20) DEFAULT NULL,
  `shareqty` bigint(20) DEFAULT NULL,
  `lastmodifieruserid` int(11) DEFAULT NULL,
  `lastmodificationtime` time DEFAULT NULL,
  `creationtime` time DEFAULT NULL,
  `creatoruserid` time DEFAULT NULL,
  `ispublish` int(11) DEFAULT '0',
  `publishtime` time DEFAULT NULL,
  `url` varchar(1024) COLLATE utf8_unicode_ci DEFAULT NULL,
  `topping` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `article_id_IDX` (`id`,`title`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci