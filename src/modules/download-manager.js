const request = require("request");
const fs = require("fs");
const mkdirp = require('mkdirp');  
const path = require('path')
const PROXY = 'http://F2846595:mrz0809@10.191.131.156:3128';  
const probe = require('probe-image-size');
class DownloadManager {

  constructor(options = { downloadUrl: '', proxy: '', outPath: '' }){
    this.outputPath = options.outPath || path.resolve('../public/upload')
    this.downloadUrl = options.downloadUrl
    this.proxy = options.proxy || PROXY
  }

  checkPath(outPath){ 
    return new Promise((resolve, reject) => {
      if (fs.existsSync(outPath)) {  
        resolve()
      } else{
        mkdirp(outPath, () => {
          resolve()
         });
      } 
    }) 
  }

  async downloadImage(opts = {}, outPath = '', fileName = '') { 
 
    await this.checkPath(outPath)

    let type = '' // 文件类型
    let length = 0 // 文件长度
    let path = outPath + '/' + fileName // 文件路径

    return new Promise((resolve, reject) => {
      request
        .get(opts)
        .on('response', (response) => {
          console.log({
            img_type: response.headers['content-type'],
            content_length: response.headers['content-length'],
            path
          }) 
          type =  response.headers['content-type']
          length = response.headers['content-length']
        })
        .pipe(fs.createWriteStream(path))
        .on("error", (e) => {
          reject(e);
          console.log("pipe error", e) 
        })
        .on("finish", () => { 
          resolve({
            type: type,
            length: length
          });
        })
        .on("close", () => {
          // console.log("close");
        }) 
    }) 
  } 
}


module.exports = DownloadManager