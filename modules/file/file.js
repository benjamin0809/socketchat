const sqlUtils = require('../../database/sql.utils');
const TBALE_NAME = 'file';
const DateUtils = require('../../utils/date.utils')

class FileDao {

    constructor() {
        this.sqlUtils = new sqlUtils()
    }
    getFileByMasterId(MasterId) {
        let sql = `SELECT * from ${TBALE_NAME} where masterid = ?`
        let params = [MasterId]
        return this.sqlUtils.queryWithParams(sql, params);
    }

    getAllFiles() {
        let sql = `SELECT * from ${TBALE_NAME}`
        let params = []
        return this.sqlUtils.queryWithParams(sql, params);
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
        console.log(fileEntity)
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
            sourceUrl: '',
            createTime:  DateUtils.getCurrentTime() ,
            modifiedTime:  DateUtils.getCurrentTime() ,
          }
        return fileEntity
    }
}

module.exports = FileDao;