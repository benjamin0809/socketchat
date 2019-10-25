const { ResponseSuccess, ResponseError } = require('../models/response')

var express = require('express');
var router = express.Router();
var mutipart = require('connect-multiparty')
const ArticleDao = require('../modules/article/article')
const path = require('path');
const dateUtils = require('../utils/date.utils')

const getMenu = () => {
  return [{
    name: 'home',
    url: './home',
    class: ''
  }, {
    name: 'profile',
    url: './profile',
    class: ''
  }, {
    name: 'message',
    url: './message',
    class: ''
  }, {
    name: 'compose',
    url: './compose',
    class: ''
  }]
}
router.get('/', function (req, res, next) {
  // 渲染文件 index.ejs
  res.redirect('./article/home')

});

router.get('/home', async (req, res, next) => {
  // 渲染文件 index.ejs
  let menu = getMenu()
  menu[0].class = "active"

  const article = new ArticleDao()
  let data = await article.getAllArticles(null, [{
    key:'publishtime',
    orderby:'desc'
  }])

  for(let item of data){ 
    item.publishtime = dateUtils.getCurrentTime(item.publishtime)
  }
  res.render('./common/home', { menu: menu, title: 'home', articles: data })
});

router.get('/index', async function (req, res, next) {
  // 渲染文件 index.ejs
  let menu = getMenu()
  menu[0].class = "active"

  const article = new ArticleDao()
  let data = await article.getAllArticles(null, [{
    key:'publishtime',
    orderby:'desc'
  }])

  for(let item of data){ 
    item.publishtime = dateUtils.getCurrentTime(item.publishtime)
  }
  res.render('./home', { menu: menu, title: 'home', articles: data })
});

router.get('/profile', function (req, res, next) {
  // 渲染文件 index.ejs
  let menu = getMenu()
  menu[1].class = "active"
  res.render('common/profile', { menu: menu, title: 'profile' })
});

router.get('/message', function (req, res, next) {
  // 渲染文件 index.ejs
  let menu = getMenu()
  menu[2].class = "active"
  res.render('common/message', { menu: menu, title: 'message' })
});
router.get('/compose', function (req, res, next) {
  console.log(req.cookies)
  // req.cookies.set('userid', 1)
  // 渲染文件 index.ejs
  let menu = getMenu()
  menu[3].class = "active"
  res.render('module/compose', { menu: menu, title: 'compose' })
});

/* GET users listing. */
router.get('/details', async (req, res, next) => {
  const id = req.query.id
  const article = new ArticleDao()
  let data = await article.getArticleById(id)
  try {
    if (data && data.length > 0) {
      article.viewArticle(id)

      let menu = getMenu()

      let mdoel = data[0];
      mdoel.publishtime = dateUtils.getCurrentTime(mdoel.publishtime)
       
      res.render('module/detail', {
        menu: menu,
        article: data[0]
      }) 
    }
  } catch (e) {
    res.render('formerror', { e: e })
  }

});

router.post('/like', async (req, res, next) => {
  const id = req.body.id
  try {
    const article = new ArticleDao()
    let data = await article.insertArticle(entity)
    res.json(new ResponseSuccess(data).toJson())
  } catch (e) {
    res.json(new ResponseError(e).toJson())
  }
})
 



router.post('/createArticle', async (req, res, next) => {
  const entity = req.body
  try {
    const article = new ArticleDao()
    let data = await article.insertArticle(entity)
    res.json(new ResponseSuccess(data).toJson())
  } catch (e) {
    res.json(new ResponseError(e).toJson())
  }
});

router.post('/create', async (req, res, next) => {
  const entity = req.body
  try {
    const article = new ArticleDao()
    let data = await article.insertArticle(entity)
    const id = data.insertId
    res.redirect('./details' + '?id=' + id)
  } catch (e) {
    res.render('formerror', { e: e })
  }
});

module.exports = router;