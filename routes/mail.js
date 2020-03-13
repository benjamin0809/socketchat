var express = require('express');
var router = express.Router();
const Mail = require('../modules/mail/mail.js'); 
const mail = new Mail(); 
const path = require('path')
 
router.get('/', function (req, res, next) { 
  res.sendFile(path.join(__dirname, '../modules/mail/index.html'))
})

router.post('/sendEmail', async function (req, res, next) { 
  let from = req.body.from || 2;
  let token = req.body.token; 
  let to = req.body.to || 0;
  let subject = req.body.subject || 2;
  let text = req.body.text; 
  let html = req.body.html || 0;
 
  if (token !== '9527') {
    console.error('permission denied')
    res.send('未授权')
    return;
  }
  try { 
    res.json(await mail.sendEmail(from, to, subject, text, html ))
  }
  catch (e) {
    console.log(e);
    res.json(e)
  }
})

router.post('/sendEmailWithAttachments', function (req, res, next) { 
  let from = req.body.from || 2;
  let token = req.body.token; 
  let to = req.body.to || 0;
  let subject = req.body.subject || 2;
  let text = req.body.text; 
  let html = req.body.html || 0;
  if (token !== '9527') {
    console.error('permission denied')
    res.send('未授权')
    return;
  }
  try { 
    mail.sendEmailWithAttachments(from, to, subject, text, html )
  }
  catch (e) {
    console.log(e);
    res.send('哦豁！')
  }
})

module.exports = router;