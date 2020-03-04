const fs = require('fs');
const path = require('path');
const mineType = require('mime-types');  // 文件类型

let filePath = path.resolve(__filename, '../scan.svg');  // 如果是本地文件
let data = fs.readFileSync(filePath); 
let bufferData = Buffer.from(data,'utf-8'); 
var base64Str = bufferData.toString('base64')
converData(base64Str)
let base64 = 'data:' + mineType.lookup(filePath) + ';base64,' + base64Str; 

console.log(base64, converData(base64Str))

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
// fs.writeFileSync(path.resolve('your/save/file/path'), base64, err => {...});