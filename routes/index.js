var express = require('express');
var router = express.Router();
var mutipart = require('connect-multiparty')
var multipartMiddleware = mutipart(); 
const fs = require('fs')
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
router.post('/upload',multipartMiddleware, function(req, res, next) {
   console.log(req.body,req.files)  

   fs.rename(req.files.myfile.path,'./base64/' + req.files.myfile.originalFilename,(err=>{
     console.log(err)
   }))
   res.writeHead(200, {'Content-Type' : 'text/html'});

   res.end('Rendered to ' + JSON.stringify(req.files, null, 2) + '\n');
});

module.exports = router;
