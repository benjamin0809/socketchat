var Redis = require('./redis');
// const redis = require('redis'); 
// const client = redis.createClient(6379,'localhost');
 
let redis = new Redis();

// redis.setItem('name','benjamin');
// redis.getItem('name').then((res)=>{
//     console.log("string: ",res);
// })  

// redis.setItem('boolean',true);
// redis.getItem('boolean').then((res)=>{
//     console.log("boolean: ",res);
// }) 


// redis.setItem('object',{ name: '123'});
// redis.getItem('object').then((res)=>{
//     console.log("object: ",res);
// })  
// redis.setItem('array',[1,2,1]);
// redis.getItem('array').then((res)=>{
//     console.log("array: ",res);
// }) 
redis.getall('getHupuImages')
// redis.sethpage('test','0-20',[{name:'sas'}]);
// redis.sethpage('test','21-40',[{name:'saasds'}]);
// redis.removeItem('getHupuImages')
// client.get('getImages',funtion)
// redis.getpageh('test','0-20').then((res)=>{
//         console.log("test: ",res);
//     })  

//     redis.getpageh('test','21-40').then((res)=>{
//         console.log("test: ",res);
//     })

    
// redis.clearKey('getHupuImages','sadasd')
 