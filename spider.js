const superagent = require('superagent'); //获取网页dom树
const cheerio = require('cheerio'); //nodejs JQuery
const async = require('async'); 
const fs = require('fs');
const url = require('url');
const request = require('request')

const http_url = 'https://iproud.fihmb.com/WebApp/Articles/Contents/77507116973378';

class Sipder {
  constructor(){ 
  }

  static run(sipder_url){
    let result = [];
    
    let allUrl = [];
    superagent.get(sipder_url)
      .end((err,res)=>{
        err && console.error(err)
        
      let $ = cheerio.load(res.text);

      let browserTilte = $('head title').attr('text')
      let articleTitle = $('.article-header h1').text() ;
      let articleSubTitle = $('.article-header .subtitle').text() ;

      $('img').each((idx,element)=>{
        
        let $element = $(element); 
        let h = $element.attr('src')
        let href = url.resolve(http_url,h)
        allUrl.push(href) 
      }) 


      console.log(allUrl)
      }) 
  }
}

Sipder.run(http_url)