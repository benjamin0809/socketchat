var express = require('express');
var router = express.Router();  
var multipartMiddleware = require('connect-multiparty')();
const FileUtils = require('../utils/file-utils')
const FileDao = require('../modules/file/file') 
const fs = require('fs')
const path = require('path')
const defaultAvatar = '../public/upload/avatar/head.png'
router.get('/getAvatar/:id', function (req, res, next) { 

  let url = path.join(__dirname, `../../public/upload/avatar/${req.params.id}.png`)
  if (fs.existsSync(url)) {
    res.sendFile(url)
  } else {
    res.sendFile(path.join(__dirname, defaultAvatar))
  }
})

router.get('/upload', function (req, res, next) { 
  res.sendFile(path.join(__dirname, '../../public/saveavatar.html'))
})
 
/* GET home page. */
router.post('/save', multipartMiddleware, async function (req, res, next) {
  const fileDao = new FileDao();
  let fileEntity = fileDao.getInstance()

  const UPLOAD_PATH = '../../public/upload/avatar'
  let outpath = path.resolve(__dirname, UPLOAD_PATH)
  if (!fs.existsSync(outpath)) {
    fs.mkdirSync(outpath)
  }

  const srcPath = req.files.myfile.path;
  const destPath = outpath + "/" + req.body.id + ".png";

  
  fileEntity.filename = req.body.id + ".png";
  fileEntity.filetype = req.files.myfile.type
  fileEntity.fileSize = req.files.myfile.size
  fileEntity.sourceUrl = req.files.url
  fileEntity.path = destPath

  var source = fs.createReadStream(srcPath); 
  var dest = fs.createWriteStream(destPath);


  source.pipe(dest);
  source.on('end', function () {
    fs.unlinkSync(srcPath); //delete tmp file
    // res.writeHead(200, {
    //   'Content-Type': 'application/json; charset=utf-8'
    // });

    let result = {}
    let webUrl = FileUtils.getRequestUrl(req) + '/upload/avatar/' + req.body.id + ".png";
    fileEntity.fullpath = webUrl
    fileDao.insertFile(fileEntity).then(res => {
      try {
        result = res
      } catch (e) { }
    }).catch(e => {
      try {
        result = JSON.stringify(e)
      } catch (e) { }
    }) 
    res.success({result,fileEntity});
  });
  source.on('error', function (err) {
    res.error(err);
  });
});

module.exports =  { router };