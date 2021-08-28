const express = require('express');
const router = express.Router();
const app =  express()
const http = require('http')
const path = require('path');  
var loadDir = require('../../load_dir');
var Module = loadDir('src/controllers'); 
const routers = []

/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/chatroom', function(req, res, next) {   
  res.sendFile(path.join(__dirname, '../../public/chat.html'));
});
 
router.get('/menu', function(req, res, next) { 
  res.sendFile(path.join(__dirname, '../../public/menu.html'));
}); 
const getBonus = ()=>{ 
  return new Promise((resolve, reject) => {
    var opt = {  
      headers:{
        //这里放期望发送出去的请求头
        "Referer": 'http://www.cwl.gov.cn/',
        "Host": "www.cwl.gov.cn",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36"
      }
      }
      //以下是接受数据的代码
      var body = '';
      var req = http.get('http://www.cwl.gov.cn/cwl_admin/kjxx/findDrawNotice?name=ssq&issueCount=1',opt, function(res) { 
        res.on('data',function(d){
        body += d;
      }).on('end', function(){  
        const json = JSON.parse(body)
        if(json && json.state ==0) { 
          resolve(json.result)
        }
      });
    
      }).on('error', function(e) {
        console.log("Got error: " + e.message);
        reject(e)
      })
      req.end();
  })

}
router.get('/getBonus',async (req, res, next) => { 
  try {
    let result = await getBonus() 
    res.json(result)
  } catch(e){
    res.error(e)
  }
 
})
routers.push({path: '/',routerName: router}) 

routers.forEach(item => { 
  app.use(item.path, item.routerName)  
})
console.log('Initial router: ', new Date().toLocaleTimeString())
for(let key in Module) {
  if(!Module[key] || !Module[key].router) { 
    console.error(`路由配置错误，请确认${key}.js正确定义了router`)
    return
  } 
  let context = Module[key].alias || `/${key}`
  app.use(context, Module[key].router)
  console.log(`初始化路由 ${key} 成功,对应的路由为: ${context}.`)
} 
console.log('Initial router done!endtime: ', new Date().toLocaleTimeString())
module.exports = app

