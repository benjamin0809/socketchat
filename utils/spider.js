const superagent = require('superagent'); //获取网页dom树
require('superagent-proxy')(superagent);
const cheerio = require('cheerio'); //nodejs JQuery
const async = require('async'); 
const url = require('url');
const request = require('request')  
const fs = require('fs')
const path = require('path')
const HupuDao = new (require('../modules/hupu/hupu'))()
const FileUtils = require('./file-utils')
class Sipder {
  constructor() {}

  static run(spider_url, proxy) {
    let result = []; 
    let allUrl = [];
    superagent.get(spider_url)
      .proxy(proxy)
      .end((err, res) => {
        err && console.error(err)

        let $ = cheerio.load(res.text);

        let browserTilte = $('head title').attr('text')
        let articleTitle = $('.article-header h1').text();
        let articleSubTitle = $('.article-header .subtitle').text();

        $('img').each((idx, element) => { 
          let $element = $(element);
          let h = $element.attr('src')
          let href = url.resolve(spider_url, h)
          allUrl.push(href)
        }) 
        console.log(allUrl)
      })
  }
   static getImages(spider_url, proxy) {
     return new Promise((resolve, reject)=>{
      let allUrl = [];
      superagent.get(spider_url)
      .proxy(proxy)
      .end((err, res) => {
        err && console.error(err) 
        let $ = cheerio.load(res.text); 

        let imgs = $('img') 
        $('img').each((idx, element) => { 
          let $element = $(element);
          let h = $element.attr('src') || $element.attr('data-src');
          let href = url.resolve(spider_url, h);
          allUrl.push(href);
        })
        resolve(allUrl);
      })
     }) 
    }  

    static getPocoImages(spider_url, proxy) {
      return new Promise((resolve, reject)=>{
       let allUrl = [];
       superagent.get(spider_url)
       .proxy(proxy)
       .end((err, res) => {
         err && console.error(err) 
         let $ = cheerio.load(res.text); 
 
         let imgs = $('div .vw_works_list') 
         imgs.each((idx, element) => { 
           let $element = $(element);
           let h = $element.attr('src') || $element.attr('data-src');
           let href = url.resolve(spider_url, h);
           allUrl.push(href);
         })
         resolve(allUrl);
       })
      }) 
     }  

     static getHupuImages(spider_url, proxy) {
      return new Promise((resolve, reject)=>{
       let allUrl = [];
       let ssr = []
       let outPath = path.resolve('./base64/' + +new Date() + '/');  
       superagent.get(spider_url) 
       .end((err, res) => {
         err && console.error(err) 
         let $ = cheerio.load(res.text); 
 
         let imgs = $('.titlelink a') 
         imgs.each((idx, element) => { 
           let $element = $(element);
           let h = $element.attr('href') ;
           if(!h)return;
           let href = url.resolve(spider_url, h);

           superagent.get(href)
            .end((error, resp)=> {
              if(error){
                console.log(error)
                return;
              }

              let $ = cheerio.load(resp.text);
              let title = $('.bbs-hd-h1>h1').attr('data-title');//帖子标题
              let avatar = $('.headpic:first-child>img').attr('src');//用户头像
              let username = $('.j_u:first-child').attr('uname');//用户ID 
              let Arr = []
              let article = {
                articleid: Number(h.replace(/[^0-9]/ig,"")) || +new Date(),
                title: title,
                avatar: avatar,
                username: username,
                images: Arr
              }
              $('.quote-content img').each((id,ele)=>{
                let $ele = $(ele);
                let src = $ele.attr('src') ||  $ele.attr('data-src'); 
                
                let url = src;
                let opts = {
                  url: url 
                };  
                FileUtils.downloadImage(opts, outPath, article.articleid+ '-' +id + '-'+ src.split('/').slice(-1))

              })

             
              ssr.push(article) 
              HupuDao.insertHupuImages(article).then(res=>{
                console.log(res)
              }).catch(err=>{
                console.log(err)
              })
           

              // let save = path.resolve('./utils/data/result1.json')
              // fs.appendFile(save, ","+ JSON.stringify(article ,null , 2) ,'utf-8', function (err) {
              //   if(err)  {
              //     console.log(err)
              //   }
              //   //console.log("数据写入success...");
              // }); 
            }) 
           
         })
         resolve(allUrl);
       })
      }) 
     }
}

module.exports = Sipder

 
