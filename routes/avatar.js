var express = require('express');
var router = express.Router();
const fs = require('fs')
const path = require('path')
const defaultAvatar = '../public/upload/avatar/head.png'
router.get('/:id', function (req, res, next) { 

  let url = path.join(__dirname, `../public/upload/avatar/${req.params.id}.png`)
  if (fs.existsSync(url)) {
    res.sendFile(url)
  } else {
    res.sendFile(path.join(__dirname, defaultAvatar))
  }
})
 
module.exports = router;