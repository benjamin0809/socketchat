var express = require('express');
var router = express.Router();
var mutipart = require('connect-multiparty')
var multipartMiddleware = mutipart(); 
const path = require('path')
const fs = require('fs')

const UPLOAD_PATH = "../public/upload/";
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

   res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'}); 
   let outpath = path.resolve(__dirname,UPLOAD_PATH)

   console.log(outpath)
  if(!fs.existsSync(outpath)){
    fs.mkdirSync(outpath)
  } 
  let result = 'Rendered to ' + JSON.stringify(req.files, null, 2) + '\n';
  
   fs.copyFile(req.files.myfile.path, outpath + "\\" + req.files.myfile.originalFilename,fs.constants.COPYFILE_FICLONE,(err=>{
     
     if(err){
      console.error(err) 
     }else{

      req.files.url = req.protocol + '://' + req.host + ':3000/upload/' + req.files.myfile.originalFilename
      console.log(req.files.url)
      console.log(req)
      result += '<img src="'+ req.files.url +'">'
     }
     


      res.end(result);

   }))
   
});

module.exports = router;
