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

try {
    const offset = 0
    const limit = 1
    const base_url = 'https://m.hupu.com/bbs/4614'

    // HupuDao.getMobileHupuImages().then(res => {
    //     console.dir(res)
    // })
    spider.getMobileHupuImages(base_url)
    // let tasks = []
    // for (let i = offset; i < limit + offset; i++) {
    //   const http_url = i == 0 ? base_url : base_url + '-' + (i + 1);
    //   tasks.push(spider.getHupuImages(http_url));
    // } 
    // Promise.all(tasks).then(result => {
    //   let resp = {
    //     data: result,
    //     miles: new Date().getTime() - st,
    //     status: 'ok'
    //   }
    //   res.send(resp)
    //   spiding = false
    // }).catch(error => {
    //   let resp = {
    //     miles: new Date().getTime() - st,
    //     status: 'failed',
    //     error: error
    //   }
    //   res.send(resp)
    //   spiding = false
    // }) 
  }
  catch (e) {
    console.log(e);
    res.send('哦豁！')
  }