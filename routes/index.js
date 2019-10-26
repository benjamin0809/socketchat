const express = require('express');
const router = express.Router();
const app =  express()
/** import module router */ 
const usersRouter = require('./users')
const hupuRouter = require('./hupu')
const fileRouter = require('./file')
const fileApiRouter = require('./fileapi')
const mailRouter  = require('./mail')
const emotionRouter  = require('./emotion')
const articleRouter  = require('./article')
const loginRouter  = require('./login')

/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('index', { title: 'Express' });
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
 
routers.forEach(item => { 
  app.use(item.path, item.routerName)  
})

module.exports = app

