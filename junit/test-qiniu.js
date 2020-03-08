const qiniu = require('qiniu'); 

const accessKey = 'jfxJjeElvLIUgldn-OmFQrSL4x4WTbZNRSkxEWZP'
const secretKey = 'hCxKrvlFocCyjeP0WQ-gJerutHlb-_gG8-iUJ8S-'
const bucket = 'bullet'
 
const publicBucketDomain = 'http://image.popochiu.com';
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

const options = {
    scope: bucket 
};

const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken=putPolicy.uploadToken(mac);  

const config = new qiniu.conf.Config({ // 空间对应的机房
    zone: qiniu.zone.Zone_z2
});

 
 
const formUploader = new qiniu.form_up.FormUploader(config);
const bucketManager = new qiniu.rs.BucketManager(mac, config);
const putExtra = new qiniu.form_up.PutExtra();

console.log(mac)
console.log(uploadToken)