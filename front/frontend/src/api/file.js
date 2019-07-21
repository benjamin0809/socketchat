import request from '../request/index' 
 
const getFiles = (data) =>{
    return request.post({
        url: 'file/getFiles',
        data: data
    })
}

export default {
    getFiles
}