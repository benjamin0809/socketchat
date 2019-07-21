import request from './axios'
 function post(axiosData) {
    var data = {
        url: '',
        method: 'post',
        data: ''
    }
    Object.assign(data, axiosData)
    return request(data)
}

 function get(axiosData) {
    var data = {
        url: '',
        method: 'post',
        data: ''
    }
    Object.assign(data, axiosData)
    return request(data)
}

export default {
    post,
    get
}