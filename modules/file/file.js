const sqlUtils = require('../../database/sql.utils');
const TBALE_NAME = 'file';
const DateUtils = require('../../utils/date.utils')
const fs = require('fs');
const Output = require('../../utils/format')

class FileDao {

    constructor() {
        this.sqlUtils = new sqlUtils()
    }
    getFileByMasterId(MasterId) {
        let sql = `SELECT * from ${TBALE_NAME} where masterid = ?`
        let params = [MasterId]
        return this.sqlUtils.queryWithParams(sql, params);
    }

    getFileById(id) {
        let sql = `SELECT * from ${TBALE_NAME} where id = ?`
        let params = [id]
        return this.sqlUtils.queryWithParams(sql, params);
    }

    getAllFiles(filters, orders) { 
        let sql = `SELECT * from ${TBALE_NAME}`
        let params = []

        if(filters && Array.isArray(filters) ){
            let filterCondition = ''  
            for(let item of filters){ 
                if(item.key && item.value){
                    let value = '%' + item.value + '%'
                    filterCondition ? filterCondition += ` and ${item.key } like ?` : filterCondition += ` where ${item.key } like ?` 
                    params.push(value)
                } 
            }
            sql += filterCondition  
        }

        if(orders && Array.isArray(orders)){
            orders.sort((a, b)=>{
                return b.priority > a.priority
            })
             
            let orderCondition = ''
            for(let item of orders){ 
                if(item.key) { 
                    orderCondition ? orderCondition += ` ,${item.key } ${item.orderby}` : orderCondition += ` order by ${item.key } ${item.orderby}`               
                }  
            }
            sql += orderCondition  
        } 
        //console.log(sql,params)
        return this.sqlUtils.queryWithParams(sql, params);
    }

    async getFiles(filters, orders, curPage = 1, pageSize = 20) { 
        let sql = `SELECT * from ${TBALE_NAME}`
        let total_sql = `SELECT COUNT(*) as total from ${TBALE_NAME}`
        let params = []

        if(filters && Array.isArray(filters) ){
            let filterCondition = ''  
            for(let item of filters){ 
                if(item.key && item.value){
                    let value = "%" + item.value + "%"
                    filterCondition ? filterCondition += ` and ${item.key } like ?` : filterCondition += ` where ${item.key } like ?` 
                    params.push(value)
                } 
            }
            sql += filterCondition  
            total_sql+= filterCondition  
        }

        if(orders && Array.isArray(orders)){
            orders.sort((a, b)=>{
                return b.priority > a.priority
            })
             
            let orderCondition = ''
            for(let item of orders){ 
                if(item.key) { 
                    orderCondition ? orderCondition += ` ,${item.key } ${item.orderby}` : orderCondition += ` order by ${item.key } ${item.orderby}`               
                }  
            }
            sql += orderCondition  
            total_sql+= orderCondition  
        } 

        sql += ` limit ${(curPage-1)* pageSize}, ${pageSize};`
        
        //console.log(sql,params)

        let result = {
            data: [],
            total: 0
        };
 
        const data = await this.sqlUtils.queryWithParams(sql + total_sql, params.concat(params));
        result.total = data[1][0].total
        result.data  = data[0]

    //    const query = await this.sqlUtils.queryWithParams(total_sql, {}) 
    //     result.total = query[0].total
    //     result.data = await this.sqlUtils.queryWithParams(sql + total_sql, params.concat(params))
        
        return result; 
    }

    deleteFilesByMasterId(MasterId) {
        let sql = `DELETE FROM ${TBALE_NAME} WHERE masterid = ?`
        let params = [MasterId]
        return this.sqlUtils.queryWithParams(sql, params);
    }

    deleteFilesById(id) {
        let sql = `DELETE FROM ${TBALE_NAME} WHERE id = ?`
        let params = [id]
        return this.sqlUtils.queryWithParams(sql, params);
    }

    insertFile(fileEntity) {
        //console.log(fileEntity)
        if (!fileEntity) return;
        let params = []
        let columns = [{
                code: "id",
                default: +new Date()
            },
            {
                code: "masterid",
                default: null
            },
            {
                code: "filename",
                default: null
            },
            {
                code: "path",
                default: null
            },
            {
                code: "fullpath",
                default: null
            },
            {
                code: "fileSize",
                default: 0
            }, 
            {
                code: "filetype",
                default: null
            },
            {
                code: "sourceUrl",
                default: null
            },
            {
                code: "createTime",
                default: DateUtils.getCurrentTime()
            },
            {
                code: "modifiedTime",
                default: null
            },
            {
                code: "width",
                default: 0
            },
            {
                code: "height",
                default: 0
            },
            {
                code: "extra",
                default: null
            }
        ]

        let col, question;
        for (let [index, item] of columns.entries()) {
            if (index == 0) {
                col = item.code;
                question = '?'
            } else {
                col += ',' + item.code;
                question += ',?'
            }
            params.push(fileEntity[item.code] || item.default)
        }
        let sql = `REPLACE INTO ${TBALE_NAME} (${
            col }
        ) VALUES (${question})`
        return this.sqlUtils.queryWithParams(sql, params);
    }

    getInstance(){
        let fileEntity = {
            id : +new Date() ,
            masterid: +new Date(),
            filename: '',
            path: '',
            fullpath: '',
            filetype: '',
            fileSize: 0,
            sourceUrl: '',
            width: 0,
            height: 0,
            extra: '',
            createTime:  DateUtils.getCurrentTime() ,
            modifiedTime:  DateUtils.getCurrentTime() ,
          }
        return fileEntity
    }

    /**
     * 删除物理文件
     * @param {*} path 
     */
    removeFile(path){
        return new Promise((resolve, reject)=>{
            fs.unlink(path,function(error){
                if(error){
                    reject(new Output(false, error))
                    return
                } 
                resolve(new Output(true, 'remove success'))
            })
        }) 
    }


    //7.fs.rename 重命名  1.改名  2.剪切文件(移动)
    renameFile(oldPath, newPath){
        return new Promise((resolve, reject)=>{
            fs.rename(oldPath, newPath, function(error){
                if(error){
                    reject({
                        result: false,
                        data:error
                    })
                    return
                } 
                resolve({
                    result: true,
                    data: 'remove success'
                })
            })
        }) 
    }

     removeFileAndRecordById(id){
        return new Promise(async (resovle, reject)=>{
            try{
                let result = await this.getFileById(id) 
                let data = await this.deleteFilesById(id) 
                 data = await this.removeFile(result[0].path) 
                resovle(new Output(true, data))
            }catch(e){
                console.error(e)
                reject(new Output(false, e))
            } 
        }) 
    }
 
}

module.exports = FileDao;