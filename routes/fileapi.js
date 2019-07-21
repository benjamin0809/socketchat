var express = require('express');
var router = express.Router(); 
const FileUtils = require('../utils/file-utils')
const utils = require('../utils/utils')
var mutipart = require('connect-multiparty')
const FileDao = require('../modules/file/file')
const QRCode = require('qrcode')
const fs = require('fs')
var multipartMiddleware = mutipart();
const path = require('path'); 
  
/* GET home page. */
router.post('/uploadFile', multipartMiddleware, async function (req, res, next) {
   
  let result = []
  if(!req.files.file){
    res.status(400).json({ msg: 'file is empty'}); 
  }

  const UPLOAD_PATH = '../public/upload'
  let outpath = path.resolve(__dirname, UPLOAD_PATH)

  const fileDao = new FileDao();
  const requestUrl = FileUtils.getRequestUrl(req)

  if (!fs.existsSync(outpath)) {
    fs.mkdirSync(outpath)
  } 

  try{
    if(Array.isArray(req.files.file)){ 
        for(let file of req.files.file){
            let fileEntity = fileDao.getInstance() 
            fileEntity.sourceUrl = req.url 
            let fileReuslt = await saveFile(fileEntity, file, outpath, requestUrl,fileDao)
            result.push(fileReuslt)
        }
      }else{
        let fileEntity = fileDao.getInstance() 
        fileEntity.sourceUrl = req.url
        const file = req.files.file
    
        let fileReuslt = await saveFile(fileEntity, file, outpath, requestUrl,fileDao)
        result.push(fileReuslt)
      } 
      res.json(result);
  }catch(e){
    res.status(e).json({error: e});
  } 
});

const saveFile = async (fileEntity, file, outpath, requestUrl, fileDao) => { 
    
    const srcPath = file.path;
    const destPath = outpath + "/" + file.originalFilename;
  
    fileEntity.filename = file.originalFilename
    fileEntity.filetype = file.type
    fileEntity.fileSize = file.size
    
    fileEntity.path = destPath
  
    var source = fs.createReadStream(srcPath);
    var dest = fs.createWriteStream(destPath);
    
    await createWriteStream(source, dest) 
    fs.unlinkSync(srcPath); //delete tmp file   

    fileEntity.fullpath = requestUrl + '/upload/' + fileEntity.filename
    await fileDao.insertFile(fileEntity) 
    return fileEntity 
}

const createWriteStream = (readStream, writeStream) =>{
    readStream.pipe(writeStream);
    return new Promise((resolve, reject) => {
        readStream.on('end', () => {
            resolve(true)
        }) 
        readStream.on('error', (err) => {
            reject(err)
        })
    }) 
}

const toQrCodeDataUrl = (url) => {
  return new Promise((resolve, reject) => 
  {
    QRCode.toDataURL(url, function (err, res) { 
      if(err){
        reject(err)
      } 
      resolve(res)
    })
  })
}



const customRouter = function (routerPath, type) {
  router.post(routerPath, function (req, res, next) { 
    let filetype = type;
    let filename = req.body.filename || new Date().getTime()
    let UPLOAD_PATH = '../public/' + filetype
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

      const image =  await toQrCodeDataUrl(fileEntity.fullpath)
     
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

router.post('/removeFileById',async (req, res, next)=>{
  const fileDao = new FileDao();
  let id = req.body.id
  try{
    let result = await fileDao.removeFileAndRecordById(id)
    res.send(result)
  }catch(e){
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
router.all('/getAllFiles', function (req, res, next) { 
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
    res.send(data)
  }).catch(e => {
    res.send(e)
  })
})
 

module.exports = router;