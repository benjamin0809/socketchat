const superagent = require('superagent'); //获取网页dom树
require('superagent-proxy')(superagent);
const cheerio = require('cheerio'); //nodejs JQuery
const async = require('async'); 
const url = require('url');
const request = require('request')  

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
}

module.exports = Sipder

 
