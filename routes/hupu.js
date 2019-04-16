var express = require('express');
var router = express.Router(); 
const Hupu = require('../modules/hupu/hupu.js');
const Spider = require('../utils/spider')
const FileUtils = require('../utils/file-utils')
const path = require('path') 

const HupuDao = new Hupu();
router.get('/getImages',function(req,res,next){
    let limit = req.query.limit;
    let offset = req.query.offset;
    HupuDao.getHupuImages(limit,offset).then(data=>{
        res.send(data)
      }).catch(error=>{
        res.send(JSON.stringify(error))
      })  
})

router.get('/spiderMove',function(req,res,next){
    let limit = req.query.limit;
    let token = req.query.token;
    let offset = req.query.offset;
    if(token !== '9527'){
        console.error('permission denied')
        res.send('未授权')
        return;
    }
   
 
  try {  
    const base_url = 'https://bbs.hupu.com/selfie' 
    for(let i = 0; i < 5; i++){
      const http_url = i > 0 ? base_url : base_url + '-' + (i+ 1); 
      const array =  Spider.getHupuImages(http_url); 

    }
    
    res.send('掂过碌蔗')
    
  }
  catch (e) {
    console.log(e);
    res.send('哦豁！')
  } 
})

module.exports = router;