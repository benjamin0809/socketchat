var express = require('express');
var router = express.Router();
var user = require('../modules/user/user')
var utils = require('../utils/utils')
/* GET users listing. */
router.get('/', function(req, res, next) {
  
  console.log("ss",req.query)  
  res.send('respond with a resource');
});

router.get('/getUser', function(req, res, next) { 
  let id = req.query.id 
  user.getUser(id).then(data=>{
    res.send(JSON.stringify(data))
  }).catch(error=>{
    res.send(JSON.stringify(error))
  })    
});
 
router.post('/login', function(req, res, next) { 
  console.log(req.body)
  let account = req.body.account 
  let password = req.body.password 

  console.log(account,password)
  user.login(account,password).then(data=>{
    res.send(JSON.stringify(data))
  }).catch(error=>{
    res.send(JSON.stringify(error))
  })    
});

/* GET users listing. */
router.post('/post', function(req, res, next) {
  console.log(req.body) 
  res.send(req.body + "222");
});
module.exports = router;
