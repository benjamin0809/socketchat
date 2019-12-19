const articleDao = require('../modules/article/article')
const articleModel = require('../models/articleModel')
const { ModelUtils } = require('../utils/index')
 
const article = new articleDao();
const model = ModelUtils.getInstance(articleModel)
model.title = 'Test 1'
article.insertArticle(model).then(res=>{
  console.log(res)
})