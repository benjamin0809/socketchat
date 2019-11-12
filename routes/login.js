const { ResponseSuccess, ResponseError } = require('../models/response')

var express = require('express');
var router = express.Router();
var mutipart = require('connect-multiparty')
const ArticleDao = require('../modules/article/article')
const path = require('path');
const dateUtils = require('../utils/date.utils') 
const UserDao = require('../modules/user/user')
const Token = require('../utils/token')
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
 
router.all('/extralogin', async function (req, res, next) { 
    
  let account = req.body.account || req.body.username
  let password = req.body.password 
   
  if (account && password) {
    const result = {
      AccessToken: Token.generateUserToken(account),
      RefreshToken: Token.generateAccessToken(account),
      userId: account
    }
    res.json(result)
  } else {
    res.status(500).json({
      msg: 'account infomation is incorret'
    })
  }
 
});

router.all('/getuser', async function (req, res, next) { 
   
   const accessToken = req.headers.authorization && req.headers.authorization.replace('Bearer ','')
   
   const UserID = Token.validToken(accessToken);

   if(UserID) {
    res.json({
      account : UserID
    });
   } else{
    res.status(401).end('unauthorization');
   } 
});
router.all('/random', async function (req, res, next) { 
   
  const accessToken = req.headers.authorization && req.headers.authorization.replace('Bearer ','')
  
  const UserID = Token.validToken(accessToken);

  if(UserID) {
   res.json({
     value : Math.random()
   });
  } else{
   res.status(401).end('unauthorization');
  } 
});

router.all('/refreshtoken', async function (req, res, next) { 
  const refreshToken = req.body.refreshToken

  const UserID = Token.validToken(refreshToken);

   if(UserID) {
    res.json({
      jwt: Token.generateUserToken(UserID),
      account : UserID
    });
   } else{
    res.status(401).end('refreshtoken is invalid');
   }  
   
});
module.exports = router;