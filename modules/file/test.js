const FileDao = require('./file')
const DateUtils = require('../../utils/date.utils')
const file = new FileDao()

 

let Entity = {
    id : +new Date() ,
    masterid: +new Date(),
    filename: 'text.txt',
    path: 'C://',
    fullpath: 'C://ssss',
    filetype: '.txt',
    sourceUrl: 'http://www.popochiu.com',
    createTime:  DateUtils.getCurrentTime() ,
    modifiedTime:  DateUtils.getCurrentTime() ,
}

file.insertFile(Entity).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})


file.getAllFiles().then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})


file.getFileByMasterId(1559227914534).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})

class demo{
    constructor(){
        this.name = ''
        this.sex = ''
    }
}

console.log(demo)