const { ResponseSuccess, ResponseError } = require('../models/response')

var express = require('express');
var router = express.Router();
var mutipart = require('connect-multiparty')
const ArticleDao = require('../modules/article/article')
const path = require('path');
const dateUtils = require('../utils/date.utils')
const UserDao = require('../modules/user/user')
var md5 = require('md5');

router.get('/', function (req, res, next) {  
  res.render('./login/login', { title: 'login',redirectUrl:  req.query.redirectUrl})
});


router.all('/login', async function (req, res, next) { 
   
  if(!req.query.redirectUrl){
    throw new Error("redirectUrl is empty")
  }

  let account = req.query.account
  let password = req.query.password
  const user = new UserDao() 
  res.cookie('userid',md5(account));
  try{
    // const data = await user.login(account, password)
    // const userId = data.data.userId
  
    res.redirect(req.query.redirectUrl)
  }catch(e){
    res.render('formerror', { e: e })
  } 
});
 

module.exports = router;