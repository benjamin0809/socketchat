var express = require('express');
var router = express.Router();
const FileUtils = require('../utils/file-utils')
const utils = require('../utils/utils')
var mutipart = require('connect-multiparty')
const FileDao = require('../modules/file/file')
const QRCode = require('qrcode')
const Qiniu = require('../modules/qiniu/qiniu')
const fs = require('fs')
var multipartMiddleware = mutipart();
const path = require('path');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../modules/file/upload.html'))
});

router.get('/upload', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../modules/file/upload2qiniu.html'))
});

router.get('/managment', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../modules/file/file-management.html'))
});

router.get('/col', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../modules/file/two-col-list.html'))
});


// router.post('/*',function (req, res, next) {

//   if(Number(req.headers.token) !== 9527){
//     res.status(401)
//     res.send('unauthorized')
//   }else{
//     next()
//   }  
// })
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

router.get('/attachment/getpdf', function (req, res, next) { 
  res.attachment(path.join(__dirname, '../public/file/pdf.pdf')) 
});
router.get('/base64/getpdf', function (req, res, next) { 
  let filePath = path.join(__dirname, '../public/1583206573117mysql.pdf')
  let data = FileUtils.readAsBase64(filePath)

  res.json({
    base64Str: data
  }) 
});

router.get('/download1/getpdf', function (req, res, next) { 
  res.download(path.join(__dirname, '../public/file/pdf.pdf')) 
});

router.post('/pdf/download', (req, res, next) => {
  request.get({
      url: `http://localhost:3000/file/download/getpdf`,
      json: req.body,
      gzip:true,
      headers:{
          'Content-Type': 'application/octet-stream',
          'usertoken': req.headers.usertoken,
      },
  }).on('response', function(response) {
      console.log(response.statusCode) // 200
      console.log(response.headers)
      // console.log(response.headers['content-type']) // 'image/png'
      // res.headers['content-type'] = response.headers['content-type']
      this.pipe(res)
    });
});

router.get('/pdf/download', (req, res, next) => {
  request.get({
      url: `http://localhost:3000/file/download/getpdf`,
      json: req.body,
      gzip:true,
      headers:{
          'Content-Type': 'application/octet-stream',
          'usertoken': req.headers.usertoken,
      },
  }).on('response', function(response) {
      console.log(response.statusCode) // 200
      console.log(response.headers)
      // console.log(response.headers['content-type']) // 'image/png'
      // res.headers['content-type'] = response.headers['content-type']
      this.pipe(res)
    });
});

router.get('/download/getword', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../../public/file/word.docx'))
});
router.get('/download/getexcel', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../../public/file/language.xlsx'))
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
router.post('/uploadFileToQiniu', multipartMiddleware, async function (req, res, next) {
  const fileDao = new FileDao();
  let fileEntity = fileDao.getInstance()
  let result = 'Rendered to ' + JSON.stringify(req.files, null, 2) + '\n';
  const qiniu = new Qiniu()
  const srcPath = req.files.myfile.path;
  fileEntity.filename = Date.now() + '' + req.files.myfile.originalFilename
  fileEntity.filetype = req.files.myfile.type
  fileEntity.fileSize = req.files.myfile.size
  fileEntity.sourceUrl = req.files.myfile.path
  fileEntity.path = req.files.myfile.path
  var source = fs.createReadStream(srcPath);

  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  try {
    const qiniu_res = await qiniu.putStream(source, fileEntity.filename)
    fileEntity.fullpath = qiniu_res.url
    fileDao.insertFile(fileEntity).then(res => {
      try {
        result += JSON.stringify(res)
      } catch (e) { }
    }).catch(e => {
      try {
        result += JSON.stringify(e)
      } catch (e) { }
    })
    result += 'webUrl="' + qiniu_res.url + '"<br>'
    if (fileEntity.filetype.indexOf('video') > -1) {
      result += `
      <video src=" ${qiniu_res.url}" controls="controls"></video>`
    } else {
      result += '<img src="' + qiniu_res.url + '">'
    }
    
    res.end(result);

  } catch (err) {
    res.end('upload failed,error :' + JSON.stringify(err));
  }

});


/* GET home page. */
router.post('/uploadFile', multipartMiddleware, async function (req, res, next) {
  const fileDao = new FileDao();
  let fileEntity = fileDao.getInstance()

  const UPLOAD_PATH = '../../public/upload'
  let outpath = path.resolve(__dirname, UPLOAD_PATH)
  if (!fs.existsSync(outpath)) {
    fs.mkdirSync(outpath)
  }
  let result = 'Rendered to ' + JSON.stringify(req.files, null, 2) + '\n';

  const srcPath = req.files.myfile.path;
  const destPath = outpath + "/" + req.files.myfile.originalFilename;

  fileEntity.filename = req.files.myfile.originalFilename
  fileEntity.filetype = req.files.myfile.type
  fileEntity.fileSize = req.files.myfile.size
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
      } catch (e) { }
    }).catch(e => {
      try {
        result += JSON.stringify(e)
      } catch (e) { }
    })
    result += 'webUrl="' + webUrl + '"<br>'
    if (fileEntity.filetype.indexOf('video') > -1) {
      result += `
      <video src=" ${webUrl}" controls="controls"></video>`
    } else {
      result += '<img src="' + webUrl + '">'
    }

    res.end(result);
  });
  source.on('error', function (err) {
    res.end('哦豁');
  });
});



const toQrCodeDataUrl = (url) => {
  return new Promise((resolve, reject) => {
    QRCode.toDataURL(url, function (err, res) {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
}

 
  router.post('/saveBytesToQiniu', async function (req, res, next) { 
    const filename = req.body.filename || new Date().getTime()  
    const filetype = req.body.type
    const fullname = filename + '.' + filetype
  
    const qiniu = new Qiniu()

    const fileDao = new FileDao();
    let fileEntity = fileDao.getInstance();
    fileEntity.filename = fullname
    fileEntity.masterid = fileEntity.id;
    fileEntity.filetype = filetype;
    fileEntity.fileSize = utils.sizeof(req.body.data);
    fileEntity.sourceUrl = req.url; 

    try{
      const qiniu_res = await qiniu.put(req.body.data, fullname)   
      fileEntity.fullpath = qiniu_res.url
      fileEntity.path = qiniu_res.url
    } catch(err) {
      res.end('upload failed,error :' + JSON.stringify(err));
    }

    fileDao.insertFile(fileEntity) 
    const image = await toQrCodeDataUrl(fileEntity.fullpath) 
    res.send({
      result: fileEntity.fullpath,
      dataurl: image
    })
  }) 


const customRouter = function (routerPath, type) {
  router.post(routerPath, function (req, res, next) {
    let filetype = type;
    let filename = req.body.filename || new Date().getTime()
    let UPLOAD_PATH = '../../public/' + filetype
    let outpath = path.resolve(__dirname, UPLOAD_PATH)
    if (!fs.existsSync(outpath)) {
      fs.mkdirSync(outpath)
    }

    fs.writeFile(outpath + '/' + filename + '.' + filetype, req.body.data, async (err) => {
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
      fileEntity.fileSize = utils.sizeof(req.body.data);
      fileEntity.fullpath = FileUtils.joinChar([FileUtils.getRequestUrl(req), filetype, fileEntity.filename], '/');
      fileEntity.sourceUrl = req.url;
      fileEntity.path = FileUtils.joinChar([outpath, filename + '.' + filetype], '/');
      fileDao.insertFile(fileEntity)

      const image = await toQrCodeDataUrl(fileEntity.fullpath)

      res.send({
        result: fileEntity.fullpath,
        dataurl: image
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
 

router.post('/removeFileById', async (req, res, next) => {
  const fileDao = new FileDao();
  let id = req.body.id
  try {
    let result = await fileDao.removeFileAndRecordById(id)
    res.send(result)
  } catch (e) {
    res.send(e)
  }
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

/**
 * {
	"filters": [{
		"key": "filename",
		"value": ""
	}],
	"orders": [{
		"orderby": "desc",
		"key": "id",
		"priority": 2
	},{
		"orderby": "desc",
		"key": "fileSize",
		"priority": 3
		}]
}
 */
router.all('/api/getAllFiles', function (req, res, next) {
  const fileDao = new FileDao();
  const params = req.method == 'POST' ? req.body : JSON.parse(req.query)
  const { filters, orders } = params

  fileDao.getAllFiles(filters, orders).then(data => {
    res.send(data)
  }).catch(e => {
    res.send(e)
  })
})

router.all('/getFiles', function (req, res, next) {
  const fileDao = new FileDao();

  const params = req.method == 'POST' ? req.body : JSON.parse(req.query)

  const { filters, orders, currentPage, pageSize } = params


  fileDao.getFiles(filters, orders, currentPage, pageSize).then(data => {
    res.custom(data)
  }).catch(e => {
    res.send(e)
  })
})

router.all('/getFileType', function (req, res, next) {
  const fileDao = new FileDao();
  fileDao.getFileType().then(data => {
    res.send(data)
  }).catch(e => {
    res.send(e)
  })
}) 

module.exports = { router };
