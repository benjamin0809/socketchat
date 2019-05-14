var express = require('express');
var router = express.Router();
var mutipart = require('connect-multiparty')
var multipartMiddleware = mutipart(); 
const path = require('path')
const fs = require('fs')

const UPLOAD_PATH = "../public/upload/";
const Emotion = require('../modules/emotion/emotion')
/* GET home page. */
router.get('/', function(req, res, next) { 
   
  // res.sendFile('../public/upload.html')
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/mock', function(req, res, next) {
  res.json(Mock.mock({
    "status": 200,
    "data|1-9": [{
        "name|5-8": /[a-zA-Z]/,
        "id|+1": 1,
        "value|0-500": 20
    }]
  }));
});

/* GET home page. */
router.get('/emotion/getEmotions', function(req, res, next) {
  res.json(new Emotion().getEmotions()) 
});

/* GET home page. */
router.get('/emotion/getEmotions/demo', function(req, res, next) {
  
  let array = new Emotion().getEmotions();
  let result = `<div></div>`;
  for(let item of array){  
    result +=`<div>${String.fromCodePoint('0x' + item.bit16)}</div>`
  } 
  res.render(result) 
  res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'}); 
});
 

module.exports = router;
