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
const dateUtils = require('./date.utils')
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

     static getTmallImages(spider_url){
      return new Promise((resolve, reject)=>{
        let outPath = path.resolve('./base64/taobao/' +  dateUtils.getCurrentDate() + '/'); 
        superagent.agent().get(spider_url).end((err,res)=>{
          if(err){
            console.error(err);
            reject(err)
            return;
          } 
          
          let $ = cheerio.load(res.text);

          let firstCatchList = $('.product a ');
          firstCatchList.each((idx,element)=>{
            let $element = $(element);
            let href = $element.attr('href') ;
            if(href && !href.startsWith('http:') && href.indexOf('detail') >-1){
              href = "https:" + href ;
              superagent.agent().get(href).end((err,res)=>{
                if(err){
                  console.error(err);
                  reject(err) 
                } 

                let $ = cheerio.load(res.text);
                let secondCatchList = $('img');
                secondCatchList.each((idx,element)=>{
                  let $element = $(element);
                let src = $element.attr('src') || $element.attr('data-src');
                  // console.log(src)
                  src = 'https:' + src
                  let url = src;
                  let opts = {
                    url: url 
                  };  
                  FileUtils.downloadImage(opts, outPath, idx + '-'+ src.split('/').slice(-1))
                })
             })
            }
          })
        }) 
      })
   }

     static getTaobaoImages(spider_url){
        return new Promise((resolve, reject)=>{
          let outPath = path.resolve('./base64/taobao/' +  dateUtils.getCurrentDate() + '/'); 
          superagent.get(spider_url).end((err,res)=>{
            if(err){
              console.error(err);
              reject(err)
              return;
            } 
            
            let $ = cheerio.load(res.text);

            let firstCatchList = $('.product a ');
            firstCatchList.each((idx,element)=>{
              let $element = $(element);
              let h = $element.attr('href') ;
              console.log(h)
            })
          }) 
        })
     }

     static findGavbus(){
      return new Promise((resolve, reject)=>{
        for(let i = 188; i <1000;i++){
          let url = `https://www.gavbus${i}.com/`;
          superagent.agent().get(url) 
          .end((err, res) => {
            console.log(i)
            if(!err){
              resolve(url)
            } 
          })
        } 
      })
     
      
     }
     static getHupuImages(spider_url) {
      return new Promise((resolve)=>{ 
       let outPath = path.resolve('./base64/' +  dateUtils.getCurrentDate() + '/');  
       superagent.get(spider_url) 
       .end((err, res) => {
         err && console.error(err) 
         let $ = cheerio.load(res.text); 
 
         let articalList = $('.titlelink a')  
         let tasks = []
         articalList.each((idx, element) => { 
           let $element = $(element);
           let articleHref = $element.attr('href') ;
           if(!articleHref)return;
           let href = url.resolve(spider_url, articleHref);
           tasks.push(this.getArticleDetails(href,articleHref,outPath))
         }) 

         Promise.all(tasks).then(res=>{
          let result = {
            result: true,
            spiderUrl: spider_url,
            successCount: 0,
            failedCount: 0
          }
          res && res.forEach(item=>{
            item.result ? result.successCount++ : result.failedCount
          }) 
           resolve(result)
         }).catch(error=>{
          resolve({result: false, message:'spider action failed',error: error})
         })
       })
      }) 
     }
 

     static insertArticle(article){
       return new Promise(resolve =>{
        HupuDao.insertHupuImages(article).then(res=>{
          resolve({result: true, message:'insert into table ok'})
        }).catch(err=>{
          resolve({result: false, message:'this item failed'})
        }) 
       }) 
     }

     static getArticleDetails(href,articleHref,outPath){  

      return new Promise((resolve,reject)=>{
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
          let stime = $('#tpc .author .stime').text();//用户ID  
          let timestamp = new Date().getTime().toString()
          let article = {
            id: Number(timestamp.substr(5,timestamp.length - 1) + articleHref.replace(/[^0-9]/ig,"")) ,
            articleid: Number(articleHref.replace(/[^0-9]/ig,"")) || +new Date(),
            title: title,
            avatar: avatar,
            username: username,
            articleTime: stime,
            sourceUrl: href,
            images: []
          }   
          $('.quote-content img').each((id,ele)=>{
            let $ele = $(ele);
            let src = $ele.attr('src') ||  $ele.attr('data-src');  
            let url = src;
            let opts = {
              url: url 
            };   
            if(src.split('/').slice(-1) != 'placeholder.png'){ 
              article.images.push(url) 
              FileUtils.downloadImage(opts, outPath, 
                article.articleid+ '-' +id + '-'+ src.split('/').slice(-1))
            } 
          }) 
          resolve(this.insertArticle(article)) 
        })  
      }) 
     }

}

module.exports = Sipder

 
