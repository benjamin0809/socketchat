const redis = require('redis'); 
const client = redis.createClient(6379,'localhost');
 
class Redis {
  
    sadd(){
        client.sadd('a','a-1','a-1-1')
    }
    
    clearPageh(main_key){ 
        client.hgetall(main_key,(err,res)=>{
            if(err){
                console.log(err)
            }
            if(res){
                Object.keys(res).forEach(key =>{
                    client.hdel(main_key,key );
                })
            } 
            client.del(main_key)
        })
    }

    getall(key){
        client.hgetall(key,function(err,res){
            if(err){
                console.log(err)
            }
            console.log(res)
        })
    }
    sethpage(key,page,data){
        let valueObj = {
            type: '',
            data: JSON.stringify(data)
        }
        valueObj.type = typeof(value) 
        client.hset(key, page, JSON.stringify(valueObj));
    }

    getpageh(key,page){ 
        return new Promise((resolve,reject)=>{
            client.hget(key,page,(err,result)=>{
                if(err){
                    reject(err);
                    console.log(err);
                    return;
                }else{
                    let valueObj = JSON.parse(result) 
                    if(!result){
                        resolve('')
                        return
                    }
                    if(valueObj.type == 'string'){ 
                        resolve(valueObj.data) 
                    }else{
                        resolve(JSON.parse(valueObj.data)) 
                    }
                } 
            }); 
        }) 
    }
    setItem(key,value){
        let valueObj = {
            type: '',
            data: JSON.stringify(value)
        }
        valueObj.type = typeof(value)
        client.set(key,JSON.stringify(valueObj)); 
    }

    removeItem(key){ 
        client.del(key); 
    }

    getItem(key){
        return new Promise((resolve,reject)=>{
            client.get(key,(err,result)=>{
                if(err){
                    reject(err);
                    console.log(err);
                    return;
                }else{
                    let valueObj = JSON.parse(result) 
                    if(!result){
                        resolve('')
                        return
                    }
                    if(valueObj.type == 'string'){ 
                        resolve(valueObj.data) 
                    }else{
                        resolve(JSON.parse(valueObj.data)) 
                    }
                } 
            }); 
        }) 
    }
 
}
module.exports = Redis