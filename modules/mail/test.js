const Mail = require('./mail')




new Mail().sendEmail('alias<894306909@qq.com>','894306909@qq.com,2723430541@qq.com,benjamin_0809@163.com','sad','asd',

`<b>这是一封来自 Node.js 的测试邮件</b>

<a href="http://www.popochiu.com/hupu/">点我验证</a>`,{
    filename: 'http://www.popochiu.com/upload/bg.jpg',
    path: 'http://www.popochiu.com/upload/bg.jpg'
}).then(res=>{
    console.log(res)
}).catch(errr=>{
    console.log(errr)
});