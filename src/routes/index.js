const express = require('express');
const router = express.Router();
const app =  express()
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
routers.push({path: '/',routerName: router}) 

routers.forEach(item => { 
  app.use(item.path, item.routerName)  
})

for(let key in Module) {
  if(!Module[key] || !Module[key].router) { 
    console.error(`路由配置错误，请确认${key}.js正确定义了router`)
    return
  } 
  let context = Module[key].alias || `/${key}`
  app.use(context, Module[key].router)
  console.log(`初始化路由 ${key} 成功,对应的路由为: ${context}.`)
} 

module.exports = app

