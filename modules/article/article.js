const sqlUtils = require('../../database/sql.utils');
const TBALE_NAME = 'article';
const DateUtils = require('../../utils/date.utils')
const fs = require('fs');
const Output = require('../../utils/format')
const articleModel = require('../../models/articleModel')
const modelUtils = require('../../utils/model-utils')

class articleDao {

    constructor() {
        this.sqlUtils = new sqlUtils()
    }
    getArticlesBySubjectId(subjectId) {
        let sql = `SELECT * from ${TBALE_NAME} where subjectId = ?`
        let params = [subjectId]
        return this.sqlUtils.queryWithParams(sql, params);
    }

    getArticleById(id) {
        let sql = `SELECT * from ${TBALE_NAME} where id = ?`
        let params = [id]
        return this.sqlUtils.queryWithParams(sql, params);
    }

    getAllArticles(filters, orders) {
        let sql = `SELECT * from ${TBALE_NAME}`
        let params = []

        if (filters && Array.isArray(filters)) {
            let filterCondition = ''
            for (let item of filters) {
                if (item.key && item.value) {
                    let value = '%' + item.value + '%'
                    filterCondition ? filterCondition += ` and ${item.key} like ?` : filterCondition += ` where ${item.key} like ?`
                    params.push(value)
                }
            }
            sql += filterCondition
        }

        if (orders && Array.isArray(orders)) {
            orders.sort((a, b) => {
                return b.priority > a.priority
            })

            let orderCondition = ''
            for (let item of orders) {
                if (item.key) {
                    orderCondition ? orderCondition += ` ,${item.key} ${item.orderby}` : orderCondition += ` order by ${item.key} ${item.orderby}`
                }
            }
            sql += orderCondition
        }
        //console.log(sql,params)
        return this.sqlUtils.queryWithParams(sql, params);
    }


    deleteArticlesBySubjectId(subjectId) {
        let sql = `DELETE FROM ${TBALE_NAME} WHERE subjectId = ?`
        let params = [subjectId]
        return this.sqlUtils.queryWithParams(sql, params);
    }

    deleteArticleById(id) {
        let sql = `DELETE FROM ${TBALE_NAME} WHERE id = ?`
        let params = [id]
        return this.sqlUtils.queryWithParams(sql, params);
    }

    insertArticle(articleEntity) {
        return this.sqlUtils.insert(TBALE_NAME, articleModel, articleEntity)
    }

}
module.exports = articleDao;