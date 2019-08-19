 const Qiniu = require('../modules/qiniu/qiniu') 
 
 const qiniu = new Qiniu()

 var key = "883a2810e383423a9b111c2532f5daea.png";
 console.log(qiniu.getPublicDownloadUrl(key))
   

const resurl = 'https://p1.hoopchina.com.cn/sina/b6c104f022fc4a9d95e6ebc1dbebf862.jpeg?x-oss-process=image/resize,w_800/format,webp'

qiniu.fetchWebUrl(resurl,resurl.split('/')[0] ).then(res=>{
    console.log(res)
})