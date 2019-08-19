var express = require('express');
var router = express.Router();
const Hupu = require('../modules/hupu/hupu.js');
const Spider = require('../utils/spider')
const FileUtils = require('../utils/file-utils')
const path = require('path')
const Redis = require('../redis/redis')
const main_key = "getHupuImages";
const HupuDao = new Hupu();
const redis = new Redis();
const spider = new Spider();
var spiding = false
router.get('/', function (req, res, next) {
  res.sendFile('./public/hupu/index.html')
})
router.get('/getImages', async (req, res, next) => {
  let limit = req.query.limit || 20;
  let offset = req.query.offset || 0;
  const pagekey = limit + '-' + offset;

  try{ 
    // let reidsResult = await redis.getpageh(main_key, pagekey);
    // if(reidsResult && reidsResult.length > 0){
    //   res.send(reidsResult)
    // }else {
    //   let data = await HupuDao.getHupuImages(limit, offset) 
    //   redis.sethpage(main_key, pagekey, data)
    //   res.send(data) 
    // } 

    let data = await HupuDao.getHupuImages(limit, offset) 
      redis.sethpage(main_key, pagekey, data)
      res.send(data) 
  }catch(e){
    console.error(e)
    res.send(e) 
  }
  
})

router.get('/getMobileImages', async (req, res, next) => {
  let limit = req.query.limit || 20;
  let offset = ~~req.query.offset || 0;
  const pagekey = limit + '-' + offset;

  try{ 
    // let reidsResult = await redis.getpageh(main_key, pagekey);
    // if(reidsResult && reidsResult.length > 0){
    //   res.send(reidsResult)
    // }else {
    //   let data = await HupuDao.getHupuImages(limit, offset) 
    //   redis.sethpage(main_key, pagekey, data)
    //   res.send(data) 
    // } 

    let data = await HupuDao.getMobileHupuImages(limit, offset)  
      res.send(data) 
  }catch(e){
    console.error(e)
    res.send(e) 
  }
  
})


router.post('/spiderMobileAction', function (req, res, next) {

  let st = new Date().getTime()
  let limit = req.body.limit || 2;
  let token = req.body.token; 
  let offset = req.body.offset || 0;

  console.log(req.body)
  redis.clearPageh(main_key)
  if (token !== '9527') {
    console.error('permission denied')
    res.send('未授权')
    return;
  }
  if(spiding){
    res.send({
      msg: 'Loading',
      result : true
    })
  }
  try {
    const base_url = 'https://m.hupu.com/bbs/4614'
    let tasks = []
    for (let i = offset; i < limit + offset; i++) {
      const http_url = i == 0 ? base_url : base_url + '-' + (i + 1);
      tasks.push(spider.getMobileHupuImages(http_url));
    }
    spiding = true
    Promise.all(tasks).then(result => {
      let resp = {
        data: result,
        miles: new Date().getTime() - st,
        status: 'ok'
      }
      res.send(resp)
      spiding = false
    }).catch(error => {
      let resp = {
        miles: new Date().getTime() - st,
        status: 'failed',
        error: error
      }
      res.send(resp)
      spiding = false
    }) 
  }
  catch (e) {
    console.log(e);
    res.send('哦豁！')
  }
})

router.post('/spiderAction', function (req, res, next) {

  let st = new Date().getTime()
  let limit = req.body.limit || 2;
  let token = req.body.token; 
  let offset = req.body.offset || 0;

  console.log(req.body)
  redis.clearPageh(main_key)
  if (token !== '9527') {
    console.error('permission denied')
    res.send('未授权')
    return;
  }
  if(spiding){
    res.send({
      msg: 'Loading',
      result : true
    })
  }
  try {
    const base_url = 'https://bbs.hupu.com/selfie'
    let tasks = []
    for (let i = offset; i < limit + offset; i++) {
      const http_url = i == 0 ? base_url : base_url + '-' + (i + 1);
      tasks.push(spider.getHupuImages(http_url));
    }
    spiding = true
    Promise.all(tasks).then(result => {
      let resp = {
        data: result,
        miles: new Date().getTime() - st,
        status: 'ok'
      }
      res.send(resp)
      spiding = false
    }).catch(error => {
      let resp = {
        miles: new Date().getTime() - st,
        status: 'failed',
        error: error
      }
      res.send(resp)
      spiding = false
    }) 
  }
  catch (e) {
    console.log(e);
    res.send('哦豁！')
  }
})

module.exports = router;