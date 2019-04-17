const sqlUtils = require('../../database/sql.utils');
const TBALE_NAME = 'hupuImages';
const DateUtils = require('../../utils/date.utils')
class HupuDao{

    constructor(){
        this.sqlUtils = new sqlUtils()
    }
    getHupuImagesById(articleId){
        let sql = `SELECT * from ${TBALE_NAME} where atricleid = ?`
        let params = [articleId]
        return this.sqlUtils.queryWithParams(sql, params);
    }
    
    getAllHupuImages(){
        let sql = `SELECT * from ${TBALE_NAME}`
        let params = []
        return this.sqlUtils.queryWithParams(sql, params);
    }
    
    getHupuImages(limit = 20,offset = 0){
        let sql = `SELECT * from ${TBALE_NAME} where length(images) > 2
        ORDER BY UNIX_TIMESTAMP(articleTime) desc, UNIX_TIMESTAMP(createTime) desc limit ${offset}, ${limit}`
        let params = []
        return this.sqlUtils.queryWithParams(sql, params);
    }
    insertHupuImages(hupuEntity){
        if(!hupuEntity)return; 
        let sql = `REPLACE INTO ${TBALE_NAME} (id,articleid,title,avatar,images,sourceUrl,username,createTime,articleTime,modifiedTime) VALUES (?,?,?,?,?,?,?,?,?,?)`
        let params = []
        params.push(hupuEntity.id || +new Date())
        params.push(hupuEntity.articleid )
        params.push(hupuEntity.title )
        params.push(hupuEntity.avatar )
        params.push(JSON.stringify(hupuEntity.images) )
        params.push(JSON.stringify(hupuEntity.sourceUrl) ) 
        params.push(hupuEntity.username )
        params.push(hupuEntity.createTime || DateUtils.getCurrentTime())
        params.push(hupuEntity.articleTime)
        
        params.push(hupuEntity.modifiedTime )
        return this.sqlUtils.queryWithParams(sql, params);
    }
}

module.exports = HupuDao;
