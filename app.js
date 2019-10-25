var express = require('express');

var child_process = require("child_process")
child_process.execFile("redis.bat",null,{ cwd:'G:/projects/node/myapp/config'},function(error,stdout,stderr){
    if(error !==null){
        console.log("exec error"+error)
    }
    else console.log("成功")
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
})

var path = require('path'); 
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon')

const Routers = require('./routes/index');
const tokenUtils = require('./utils/token')
const whitelist = require('./routes/whitelist')
const TaskList = require('./modules/task/task-list')
var app = express();  

// view engine setup
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.static(path.join(__dirname, 'front/frontend'))); 
app.use(express.static(path.join(__dirname, 'front'))); 
app.use(favicon(path.join(__dirname,  './favicon.ico')))


// 自定义跨域中间件
var allowCors = function(req, res, next) {
  // res.header('Access-Control-Allow-Origin', req.headers.origin); 

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials','true');
  next();
};  
app.use(allowCors)
// 自定义跨域中间件


/** request 拦截器 */ 
app.all('*',function(req, res, next) {   

  const clientIP = getClientIP(req)
  const method = req.method  
  console.log('request 拦截器' +  req.url ,',req.path' + req.path +', method: ', method ,"客户端Ip", clientIP) 

  // 白名单

  let isWhite = whitelist.some(item =>req.path.indexOf(item) > -1)
  if(isWhite){
    next()
    return
  }
 
  if(req.path.indexOf('api') > -1 && !tokenUtils.validToken(req.headers.token)){
   // 验证不通过 
     res.status(401).send('Unauthorized')
  }else{
    next();  
  } 
 
});

/**定义路由 */  
app.use(Routers)  
  
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // next(createError(404)); 
  res.sendFile(path.join(__dirname, 'public/404.html') ) 
});

 
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

function getClientIP(req) {
  return req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
      req.connection.remoteAddress || // 判断 connection 的远程 IP
      req.socket.remoteAddress || // 判断后端的 socket 的 IP
      req.connection.socket.remoteAddress;
};

new TaskList().start() 
module.exports = app;
