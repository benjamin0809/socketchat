const request = require("request");
const fs = require("fs");
const mkdirp = require('mkdirp');  
const path = require('path')
const proxy = '';  
const mineType = require('mime-types');  // 文件类型 
const probe = require('probe-image-size');

class FileUtils { 

  static mkdirpAsync(outPath){

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
  static async downloadImage(opts = {}, outPath = '', fileName = '') { 
 
    await this.mkdirpAsync(outPath)

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

  static saveBase64(base64str) { 
    let reg  = /data:image\/([^;]+).*/i

    if(!reg.test(base64str)){
      console.error('not image base64');
      return ;
    }
    let mineType = (base64str).replace(reg,'$1');  
    let fileName = +new Date() + '.' + mineType; 
    var base64Data = base64str.replace(/^data:image\/\w+;base64,/, "");
    base64Data =  Buffer.from(base64Data,'base64');
    
    // 创建输出目录
    let outPath = path.resolve('./base64/'); 
    let outFile = path.join(outPath, fileName);
    if (fs.existsSync(outPath)) {
      saveData(base64Data, outFile);
    } else {
      mkdirp(outPath, () => {
        saveData(base64Data, outFile);
      });
    }
  }

  static parse(file) {
    let filePath = path.resolve(file); // 原始文件地址
    let fileName = filePath.split('\\').slice(-1)[0].split('.'); // 提取文件名
    let fileMimeType = mineType.lookup(filePath); // 获取文件的 memeType
  
    // 如果不是图片文件，则退出
    // if (!fileMimeType.toString().includes('image')) { 
    //     console.log('not image,this type: '+ fileMimeType);
    //   return;
    // }
  
    // 读取文件数据
    let data = fs.readFileSync(filePath);
    data =  Buffer.from(data);
  
    // 转换为 data:image/jpeg;base64,***** 格式的字符串
    // let base64 = 'data:' + fileMimeType + ';base64,' + data;
  
    // 创建输出目录
    let outPath = path.resolve('./base64/');
    let outFileName = `${fileName.join('.')}`;
    let outFile = path.join(outPath, outFileName);
    if (fs.existsSync(outPath)) {
      saveData(data, outFile, filePath, outFileName);
    } else {
      mkdirp(outPath, () => {
        saveData(data, outFile, filePath, outFileName);
      });
    }
  }

  /**
   * 
   * @param {* buffer数据} data 
   * @param {* 输出file} file 
   * @param {* file路径} filePath 
   * @param {* 输出file名称} outFileName 
   */
  static _saveData(data, file, filePath, outFileName) {
    fs.createWriteStream(file).end(data, () => {
      console.log('write success')
    })
  } 
  static getRequestUrl(req) {

    if(!req)return '';
    let port = ""
    if (req.connection.localPort != 80 && req.connection.localPort != 443) {
      port = ':' + req.connection.localPort
    }
    return req.protocol + '://' + req.hostname  + port 
  };

  /**
   * height:128
      hUnits:"px"
      length:15849
      mime:"image/jpeg"
      type:"jpg"
      url:"http://static-c.pocoimg.cn/project/poco_new_pc/prod/online/image/widget/poco_footer/i/code-img_e4da165.jpg"
      width:128
      wUnits:"px"
   * @param {*} url 
   */
  static getImageInfo(url){
    return probe(url) 
  }
  static joinChar(array,char){
    return array.join(char)
  }
 
  static readAsBase64(filePath) {
    let data = fs.readFileSync(filePath); 
    let bufferData = Buffer.from(data,'utf-8'); 
    let base64Str = bufferData.toString('base64') 
    let base64 = 'data:' + mineType.lookup(filePath) + ';base64,' + base64Str; 
    return base64
  } 
}

module.exports = FileUtils;
