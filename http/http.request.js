var http = require("http");
var config = require("../config/dev.conf");
  
const request = function(method, path, body, headers){ 
    var data = {}
    body && Object.assign(data,body)
    data = JSON.stringify(data)
    var opt = {  
        host: config.sever.host,  
        port: config.sever.port,  
        method: method,  
        path: path,  
        headers: {  
            "Content-Type": 'application/json',  
            "Content-Length": data.length 
        }  
    }   
      
    Object.assign(opt.headers, headers)
    var body = '';  
    return new Promise((resolve,reject)=>{
        var req = http.request(opt, function(res) {   
            res.on('data',function(data){  
                body += data;  
            }).on('end', function(){  
                resolve(body)  
            });  
        }).on('error', function(e) {  
            reject(e);  
        })  
        req.write(data);  
        req.end();  
    })
    
}

const get = function(path, body, headers){
    if( typeof(body) == 'object'){
        path += '?'
        Object.entries(body).forEach(obj=>{
            path += `${obj[0]}=${obj[1]}&`
        })
    }
    return request('GET', path, null, headers)
}

const post = function(path, body, headers){
    return request('POST', path, body, headers)
}


module.exports = {
    get: get,
    post: post
}  