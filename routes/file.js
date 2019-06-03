var express = require('express');
var router = express.Router(); 
const FileUtils = require('../utils/file-utils')
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
  let fileEntity = fileDao.getInstance()

  const UPLOAD_PATH = '../public/upload'
  let outpath = path.resolve(__dirname, UPLOAD_PATH)
  if (!fs.existsSync(outpath)) {
    fs.mkdirSync(outpath)
  }
  let result = 'Rendered to ' + JSON.stringify(req.files, null, 2) + '\n';

  const srcPath = req.files.myfile.path;
  const destPath = outpath + "/" + req.files.myfile.originalFilename;

  fileEntity.filename = req.files.myfile.originalFilename
  fileEntity.filetype = req.files.myfile.type
  fileEntity.sourceUrl = req.files.url
  fileEntity.path = destPath

  var source = fs.createReadStream(srcPath);
  var dest = fs.createWriteStream(destPath);

  source.pipe(dest);
  source.on('end', function () {
    fs.unlinkSync(srcPath); //delete tmp file
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });

    let webUrl = FileUtils.getRequestUrl(req) + '/upload/' + req.files.myfile.originalFilename
    fileEntity.fullpath = webUrl
    fileDao.insertFile(fileEntity).then(res => {
      try {
        result += JSON.stringify(res)
      } catch (e) {}
    }).catch(e => {
      try {
        result += JSON.stringify(e)
      } catch (e) {}
    })
    result += 'webUrl="' + webUrl + '"<br>'
    if(fileEntity.filetype.indexOf('video') > -1){
      result +=  `
      <video src=" ${webUrl}" controls="controls">
 
</video>`

    }else{
      result += '<img src="' + webUrl + '">'
    }  
   
    res.end(result);
  });
  source.on('error', function (err) {
    res.end('哦豁');
  });
});


const customRouter = function (routerPath, type) {
  router.post(routerPath, function (req, res, next) {

    if (req.body.token != '9527') {
      res.send({
        msg: 'token id invalid'
      })
      return;
    }
    let filetype = type;
    let filename = req.body.filename || new Date().getTime()
    let UPLOAD_PATH = '../public/' + filetype
    let outpath = path.resolve(__dirname, UPLOAD_PATH)
    if (!fs.existsSync(outpath)) {
      fs.mkdirSync(outpath)
    }

    fs.writeFile(outpath + '/' + filename + '.' + filetype, req.body.data, (err) => {
      if (err) {
        res.send({
          msg: 'o huo'
        })
        return;
      }
      const fileDao = new FileDao();
      let fileEntity = fileDao.getInstance();
      fileEntity.filename = filename + '.' + filetype
      fileEntity.masterid = fileEntity.id;
      fileEntity.filetype = filetype;
      fileEntity.fullpath = FileUtils.joinChar([FileUtils.getRequestUrl(req), filetype, fileEntity.filename], '/');
      fileEntity.sourceUrl = req.url;
      fileEntity.path = FileUtils.joinChar([outpath, filename + '.' + filetype], '/');
      fileDao.insertFile(fileEntity)
      res.send({
        result: fileEntity.fullpath
      })
    })
  })
}
const types = [{
    folder: 'js',
    router: '/saveAsJS'
  },
  {
    folder: 'css',
    router: '/saveAsCss'
  },
  {
    folder: 'html',
    router: '/saveAsHtml'
  }
]

types.forEach(item => {
  customRouter(item.router, item.folder)
})

router.get('/getFileByMasterId', function (req, res, next) {
  const id = req.query.id
  const fileDao = new FileDao();
  fileDao.getFileByMasterId(id).then(data => {
    res.send({
      result: data
    })
  }).catch(e => {
    res.send({
      result: e
    })
  })
})

router.get('/getAllFiles', function (req, res, next) { 
  const fileDao = new FileDao();
  fileDao.getAllFiles(req.query.key).then(data => {
    res.send(data)
  }).catch(e => {
    res.send(e)
  })
})
 
module.exports = router;