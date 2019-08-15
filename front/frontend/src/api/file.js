import request from '../request/index' 
 
const getFiles = (data) =>{
    return request.post({
        url: 'file/getFiles',
        data: data
    })
}

const uploadFile = () => {
    return request.post({
        url: 'file/uploadFile',
        data: data
    }) 
}

const removeFileById = id => {
    return request.post({
        url: 'file/removeFileById',
        data: {
            id
        }
    }) 
}

const saveAsJS = (filename, data) => {
    return request.post({
        url: 'file/saveAsJS',
        data: {
            filename,
            data
        }
    }) 
}

const saveAsCss = (filename, data) => {
    return request.post({
        url: 'file/saveAsCss',
        data: {
            filename,
            data
        }
    }) 
}

const saveAsHtml = (filename, data) => {
    return request.post({
        url: 'file/saveAsHtml',
        data: {
            filename,
            data
        }
    }) 
}


export default {
    getFiles,
    removeFileById,
    saveAsJS,
    saveAsCss,
    saveAsHtml
}