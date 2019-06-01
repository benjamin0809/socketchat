const request = require("request");
const fs = require("fs");
const mkdirp = require('mkdirp');  
const path = require('path')

class FileUtils { 
  static downloadImage(opts = {}, outPath = '', fileName = '') {
    if (fs.existsSync(outPath)) {
      return this._downImg(opts, outPath + '/' + fileName)
    } else {
      mkdirp(outPath, () => {
        return this._downImg(opts, outPath + '/' + fileName)
      });
    }
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
  /**
   * 下载网络图片
   * @param {object} opts 
   */
  static _downImg(opts = {}, path = '') {

    return new Promise((resolve, reject) => {
      request
        .get(opts)
        .on('response', (response) => {
          console.log("img type:", response.headers['content-type'])
        })
        .pipe(fs.createWriteStream(path))
        .on("error", (e) => {
          console.log("pipe error", e)
          resolve('');
        })
        .on("finish", () => {
          console.log("finish");
          resolve("ok");
        })
        .on("close", () => {
          console.log("close");
        })

    })
  };

 
  static getRequestUrl(req) {

    if(!req)return '';
    let port = ""
    if (req.connection.localPort != 80) {
      port = ':' + req.connection.localPort
    }
    return req.protocol + '://' + req.hostname  + port 
  };
}

module.exports = FileUtils;