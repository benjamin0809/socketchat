var express = require('express');
var router = express.Router();
var user = require('../modules/user/user')
var utils = require('../utils/utils')
const DateUtils = require('../utils/date.utils') 
var mutipart = require('connect-multiparty')
const FileDao = require('../modules/file/file')

const fs = require('fs')
var multipartMiddleware = mutipart();
const path = require('path'); 
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../modules/file/upload.html'))
});

/* GET users listing. */
router.get('/download/demo', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../modules/file/download.html'))
});


router.post('/download/png', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/images/album.png'))
});

router.post('/download/pdf', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/file/pdf.pdf'))
});


router.post('/download/word', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/file/word.docx'))
});

router.post('/download/excel', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/file/language.xlsx'))
});

router.get('/download/getpdf', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/file/pdf.pdf'))
});

router.get('/download/getword', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/file/word.docx'))
});
router.get('/download/getexcel', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/file/language.xlsx'))
});

router.post('/readStream/excel', function (req, res, next) {
  var readerStream = fs.createReadStream(path.join(__dirname, '../public/file/language.xlsx'));

  var data = ''
  readerStream.setEncoding('UTF8');

  // 处理流事件 --> data, end, and error
  readerStream.on('data', function (chunk) {
    data += chunk;
  });

  readerStream.on('end', function () {
    console.log(data);
    res.send(data)
  });

  readerStream.on('error', function (err) {
    console.log(err.stack);
  });

});


/* GET home page. */
router.post('/uploadFile', multipartMiddleware, function (req, res, next) {
  const fileDao = new FileDao();
  let fileEntity = {
    id : +new Date() ,
    masterid: +new Date(),
    filename: '',
    path: '',
    fullpath: '',
    filetype: '',
    sourceUrl: '',
    createTime:  DateUtils.getCurrentTime() ,
    modifiedTime:  DateUtils.getCurrentTime() ,
  }

  const UPLOAD_PATH = '../public/upload'
  let outpath = path.resolve(__dirname, UPLOAD_PATH)
  if (!fs.existsSync(outpath)) {
    fs.mkdirSync(outpath)
  }
  let result = 'Rendered to ' + JSON.stringify(req.files, null, 2) + '\n';
  fileEntity.filename =  req.files.myfile.originalFilename
  fileEntity.filetype =  req.files.myfile.originalFilename.split('.').pop();
  const srcPath = req.files.myfile.path;
  const destPath = outpath + "/" + req.files.myfile.originalFilename;
  fileEntity.sourceUrl = req.files.url
  fileEntity.path = destPath
  
  var source = fs.createReadStream(srcPath);
  var dest = fs.createWriteStream(destPath);
  
  source.pipe(dest);
  source.on('end', function () {
    fs.unlinkSync(srcPath);  //delete tmp file
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });
    let port = ""
    if (req.connection.localPort != 80) {
      port = ':' + req.connection.localPort
    }
    req.files.url = req.protocol + '://' + req.hostname  + port + '/upload/' + req.files.myfile.originalFilename
    fileEntity.fullpath = req.files.url
    fileDao.insertFile(fileEntity).then(res=>{
      try{
        result += JSON.stringify(res)
      }catch(e){} 
    }).catch(e=>{
      try{
        result += JSON.stringify(e)
      }catch(e){}  
    })

    result += '<img src="' + req.files.url + '">'
    res.end(result);
  }); 
  source.on('error', function (err) {
    res.end('哦豁');
  });


 


  // fs.copyFile(srcPath, destPath, fs.constants.COPYFILE_FICLONE, (err => { 
  //   if (err) {
  //     console.error(err)
  //   } else { 
  //     let port = ""
  //     if(req.connection.localPort != 80){
  //       port = ':' + req.connection.localPort
  //     }
  //     req.files.url = req.protocol + '://' + req.host + port + '/upload/' + req.files.myfile.originalFilename
  //     result += '<img src="' + req.files.url + '">'
  //   } 
  // }))

});

router.post('/saveAsHtml', function (req, res, next) {
  console.log(req.body) 
  if (req.body.token != '9527') {
    res.send({
      msg: 'token id invalid'
    })
    return;
  }

  let UPLOAD_PATH = '../public/upload'
  console.log(UPLOAD_PATH)
  let outpath = path.resolve(__dirname, UPLOAD_PATH)
  console.log(outpath)
  if (!fs.existsSync(outpath)) {
    fs.mkdirSync(outpath)
  }


  let filename = req.body.filename || new Date().getTime()
  fs.writeFile(outpath + '/' + filename + '.html', req.body.data, (err) => {
    if (err) {
      res.send({
        msg: 'o huo'
      })
      return;
    }
    res.send({
      result: filename
    })
  })

  router.post('/saveAsJS', function (req, res, next) {
    console.log(req.body)

    if (req.body.token != '9527') {
      res.send({
        msg: 'token id invalid'
      })
      return;
    }

    let UPLOAD_PATH = '../public/js'
    let outpath = path.resolve(__dirname, UPLOAD_PATH)
    if (!fs.existsSync(outpath)) {
      fs.mkdirSync(outpath)
    }


    let filename = req.body.filename || new Date().getTime()
    fs.writeFile(outpath + '/' + filename + '.js', req.body.data, (err) => {
      if (err) {
        res.send({
          msg: 'o huo'
        })
        return;
      }
      res.send({
        result: filename
      })
    })

  }) 
});
 
router.get('/getFileByMasterId', function (req, res, next) { 
  const id = req.query.id 
  const fileDao = new FileDao();
  fileDao.getFileByMasterId(id).then(data=>{
    res.send({
      result: data
    })
  }).catch(e=>{
    res.send({
      result: e
    })
  }) 
})

router.get('/getAllFiles', function (req, res, next) {  
  const fileDao = new FileDao();
  fileDao.getAllFiles().then(data=>{
    res.send(data)
  }).catch(e=>{
    res.send( e)
  }) 
})

module.exports = router;