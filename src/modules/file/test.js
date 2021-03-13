const FileDao = require('./file')
const DateUtils = require('../../utils/date.utils')
const file = new FileDao()



let Entity = {
    id: +new Date(),
    masterid: +new Date(),
    filename: 'text.txt',
    path: 'C://',
    fullpath: 'C://ssss',
    filetype: '.txt',
    sourceUrl: 'http://www.popochiu.com',
    createTime: DateUtils.getCurrentTime(),
    modifiedTime: DateUtils.getCurrentTime(),
}

const testInsertFile = () => {
    file.insertFile(Entity).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}


const testGetAllFiles = () => {
    file.getAllFiles().then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}

const testGetFileByMasterId = () => {
    file.getFileByMasterId(1559227914534).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}

const testRemoveFile = async () => {
    try{
        let result = await file.removeFile('G:\\projects\\node\\myapp\\public\\upload\\1558109541862.html')
        console.log(result)
    }catch(e){
        console.error(e)
    }
    
}

class demo {
    constructor() {
        this.name = ''
        this.sex = ''
    }
}

///testInsertFile()
//testGetAllFiles()
//testGetFileByMasterId()
testRemoveFile.call()
console.log( new demo())