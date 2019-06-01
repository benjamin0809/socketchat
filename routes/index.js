const express = require('express');
const router = express.Router();
const app =  express()
/** import module router */ 
const usersRouter = require('./users')
const hupuRouter = require('./hupu')
const fileRouter = require('./file')
const mailRouter  = require('./mail')
const emotionRouter  = require('./emotion')

/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('index', { title: 'Express' });
});


const routers = []
routers.push({path: '/',routerName: router})
routers.push({path: '/users',routerName: usersRouter})
routers.push({path: '/hupu',routerName: hupuRouter})
routers.push({path: '/file',routerName: fileRouter})
routers.push({path: '/email',routerName: mailRouter})
routers.push({path: '/emotion',routerName: emotionRouter})
 
routers.forEach(item => { 
  app.use(item.path, item.routerName)  
})

module.exports = app

