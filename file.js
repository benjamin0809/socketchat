const fs = require('fs')
const path = require('path')
const mineType = require('mime-types');  // 文件类型
const mkdirp = require('mkdirp');
// let filePath = path.resolve('./public/images/avatar1.jpg');  // 如果是本地文件

// let data = fs.readFileSync(filePath);
// // data = new Buffer(data).toString('base64');
// let bufferData = Buffer.from(data); 

// let fileMimeType = mineType.lookup(filePath); // 获取文件的 memeType
// let base64 = 'data:' + mineType.lookup(filePath) + ';base64,' + bufferData; 

// var savepath = 'public/images/'+ Date.now() +'.jpg'

// let spath = path.resolve(savepath)
// fs.writeFileSync(spath, bufferData, err => {
//     console.log(err)
// });

/**
 * 
 * @param {* buffer数据} data 
 * @param {* 输出file} file 
 * @param {* file路径} filePath 
 * @param {* 输出file名称} outFileName 
 */
function saveData(data,file,filePath,outFileName){
    fs.createWriteStream(file).end(data,()=>{
        console.log('write success')
    })
}

function parse(file) {
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

  module.exports = {
      parse: parse
  }
