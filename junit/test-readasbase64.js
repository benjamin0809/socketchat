const fs = require('fs');
const path = require('path');
const mineType = require('mime-types');  // 文件类型

 

// console.log(base64, converData(base64Str))

function converData(data) {
    data = data.replace(/[\n\r]/g, '');
    var raw = window.atob(data);
    var rawLength = raw.length;
    var array = new Unit8Array(new ArrayBuffer(rawLength));
    for (var i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i)
    }
    return array
}

function readlocalfile(filepath) { 
    let data = fs.readFileSync(filepath); 
    let bufferData = Buffer.from(data,'utf-8'); 
    var base64Str = bufferData.toString('base64') 
    let base64 = 'data:' + mineType.lookup(filepath) + ';base64,' + base64Str; 
    return base64
}

console.log(readlocalfile('H:\\app\\fit\\ionic4-for-iproud-app\\src\\assets\\img\\header-md-bg.png'))
// fs.writeFileSync(path.resolve('your/save/file/path'), base64, err => {...});