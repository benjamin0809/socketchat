const Spider = require('../utils/spider')
const FileUtils = require('../utils/file-utils')
const path = require('path')
const proxy = 'http://F2846595:mrz0809@10.191.131.156:3128'; 

(async () => {
  try { 

    const base_url = 'https://bbs.hupu.com/selfie'
    
    for(let i = 0; i < 5; i++){
      const http_url = i > 0 ? base_url : base_url + '-' + (i+ 1); 
      const array = await Spider.getHupuImages(http_url,proxy);
      let outPath = path.resolve('./base64/' + +new Date() + '/');  
      array && array.forEach(element => {
        if(element.startsWith('http')){
          let url = element;
          let opts = {
            url: url,
            proxy: proxy
          };  
          FileUtils.downloadImage(opts, outPath, element.split('/').slice(-1))
        }else { 
          FileUtils.saveBase64(element)
        }
      }); 
    }
    
    
  }
  catch (e) {
    console.log(e);
  }
})()