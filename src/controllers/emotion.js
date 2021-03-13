const Emotion = require('../modules/emotion/emotion')
const express = require('express');
const router = express.Router();


/* GET emoations data . */
router.get('/getEmotions', function (req, res, next) {
  res.success(new Emotion().getEmotions())
});

/* GET emotion demo. */
router.get('/getEmotions/demo', function (req, res, next) {

  let array = new Emotion().getEmotions();
  let result = `<div></div>`;
  for (let item of array) {
    result += `<div>${String.fromCodePoint('0x' + item.bit16)}</div>`
  }

  // res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'}); 
  res.render(result)
});

module.exports = { router };