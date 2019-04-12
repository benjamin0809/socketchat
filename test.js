 
var sqlUtils = require('./database/sql.utils.js')
var http = require('./http/http.request')
const jwt = require('jsonwebtoken');

const file = require('./file')
// sqlUtils.query('select * from user').then(res=>{
//     console.log(res)
// }).catch(err=> console.log(err))
 
 
 
sqlUtils.query('select * from user').then(res=>{
    console.log(res)
}).catch(err=> console.log(err.sqlMessage))

let sqlArr = [{
    sql: 'insert into user values(?,?,?,?);',
    params: ['123',"benjamin","123","benjamin009"]
},{
    sql: 'delete from user where id = ?;',
    params: ['123']
},{
    sql: 'select * from user where id = ?',
    params: ['123']
}]

// sqlUtils.queryWithParams(sqlArr[2].sql,sqlArr[2].params).then(res=>{
//     console.log(res)
// }).catch(err=> console.log(err))

// sqlUtils.transaction(sqlArr).then(res=>{
//     console.log(res)
// }).catch(err=> console.log(err))

var data = {account:"benjamin1",password:"1235"};   
 
// http.get('/users/getUser',{ id: '123'}).then(res=>{
//     console.log(res)
// }).catch(err=> console.log(err))

http.post('/users/login',data).then(res=>{
    console.log(res)
}).catch(err=> console.log(err))

// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
// console.log(token)
// // jwt.verify(token)
// console.log(jwt.decode(token))

file.parse('./public/images/avatar1.jpg')
file.parse('./public/images/image.html')

let Ut = require("./common");
 
(async () => {
  try {
    let url = "http://localhost:3000/images/one.html";
    let opts = {
      url: url,
    };
    let path = "./one.html";
    let r1 = await Ut.downImg(opts, path);
    console.log(r1);
  }
  catch (e) {
    console.log(e);
  }
})() 