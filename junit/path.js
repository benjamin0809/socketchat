const path = require('path')


console.log('public/upload',path.resolve('public/upload'))
console.log('/public/upload',path.resolve('/public/upload'))
console.log('./public/upload',path.resolve('./public/upload'))

console.log('__dirname,public/upload',path.resolve(__dirname,'public/upload'))
console.log('__dirname,/public/upload',path.resolve(__dirname,'/public/upload'))
console.log('__dirname,./public/upload',path.resolve(__dirname,'../public/upload'))
 