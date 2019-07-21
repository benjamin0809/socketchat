var express = require('express');
var router = express.Router();
const UserDao = require('../modules/user/user')
var utils = require('../utils/utils') 
const token = require('../utils/token')

router.all('/getUser', function(req, res, next) { 
  let id = req.query.id 
  const user = new UserDao()
  user.getUser(id).then(data=>{
    res.send(JSON.stringify(data))
  }).catch(error=>{
    res.send(JSON.stringify(error))
  })    
});
 
router.post('/login', function(req, res, next) { 
  let account = req.body.account 
  let password = req.body.password 
  const user = new UserDao() 
  user.login(account,password).then(data=>{
    const userId = data.data.userId
    const result = {
      accessToken : token.generateAccessToken(userId),
      userToken : token.generateUserToken(userId),
      userId: userId
    } 
    res.json(result)
  }).catch(error=>{
    res.send(JSON.stringify(error))
  })    
});

router.post('/register', function(req, res, next) { 
  const user = new UserDao()
  console.log(req.body)
  let account = req.body.account 
  let password = req.body.password 
  let nickname = req.body.nickname 
  console.log(account,password,nickname)
  user.register(account, password, nickname).then( data =>{

    const userId = data.data.userId
    const result = {
      accessToken : token.generateAccessToken(userId),
      userToken : token.generateUserToken(userId),
      userId: userId
    } 
    res.json(result)
  }).catch(error=>{
    res.send(JSON.stringify(error))
  })    
});

 
module.exports = router;
