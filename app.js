 var express = require('express');
var path = require('path'); 
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon')

const Routers = require('./routes/index');
var app = express(); 
 
 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(favicon(path.join(__dirname,  './favicon.ico')))


// 自定义跨域中间件
var allowCors = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  // res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials','true');
  next();
};  
app.use(allowCors)
// 自定义跨域中间件


/** request 拦截器 */ 
app.all('*',function(req, res, next) { 
  const method = req.method  
  console.log('request 拦截器' +  req.url ,', method: ', method ,)
  next();
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

module.exports = app;
