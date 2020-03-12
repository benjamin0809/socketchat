const express = require('express');
const router = express.Router();
const app =  express()
const path = require('path'); 
/** import module router */ 
const usersRouter = require('./users')
const hupuRouter = require('./hupu')
const fileRouter = require('./file')
const fileApiRouter = require('./fileapi')
const mailRouter  = require('./mail')
const emotionRouter  = require('./emotion')
const articleRouter  = require('./article')
const loginRouter  = require('./login')
const wechatRouter  = require('./wechat')

function getClientIP(req) {
  return req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
      req.connection.remoteAddress || // 判断 connection 的远程 IP
      req.socket.remoteAddress || // 判断后端的 socket 的 IP
      req.connection.socket.remoteAddress;
};

/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/chatroom', function(req, res, next) {   
  res.sendFile(path.join(__dirname, '../public/chat.html'));
});

/* GET home page. */
router.get('/chats', function(req, res, next) {   
  res.render('chat', { ip: getClientIP(req)});
});

router.get('/admin', function(req, res, next) { 
  res.sendFile(path.join(__dirname, '../front/admin/dist/index.html'));
});

router.get('/scan', function(req, res, next) {
  res.json( req.query);
});

const routers = []
routers.push({path: '/',routerName: router})
routers.push({path: '/api/users',routerName: usersRouter})
routers.push({path: '/hupu',routerName: hupuRouter})
routers.push({path: '/file',routerName: fileRouter})
routers.push({path: '/api/file',routerName: fileApiRouter}) 
routers.push({path: '/email',routerName: mailRouter})
routers.push({path: '/emotion',routerName: emotionRouter})
routers.push({path: '/article',routerName: articleRouter})
routers.push({path: '/connect',routerName: loginRouter})
routers.push({path: '/wechat',routerName: wechatRouter})

routers.forEach(item => { 
  app.use(item.path, item.routerName)  
})

module.exports = app

