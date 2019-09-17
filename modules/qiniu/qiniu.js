const qiniu = require('qiniu'); 

const accessKey = 'jfxJjeElvLIUgldn-OmFQrSL4x4WTbZNRSkxEWZP'
const secretKey = 'hCxKrvlFocCyjeP0WQ-gJerutHlb-_gG8-iUJ8S-'
const bucket = 'bullet'
 
const publicBucketDomain = 'http://www.popochiu.com.qiniudns.com';
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
 

class Qiniu{

    constructor(){

    }

    uploadFile(filename, localFile){
        return new Promise((resolve, reject) =>{
            // 文件上传
            formUploader.putFile(uploadToken, filename, localFile, putExtra, function(respErr,
                respBody, respInfo) {
                if (respErr) {
                    console.error(respErr) ;
                    reject(respErr)
                }
                if (respInfo.statusCode == 200) { 
                    resolve({
                        hash: respBody.hash,
                        key: respBody.key
                    })
                } else {
                    reject(respBody)
                    console.error(respBody); 
                }
            });
        }) 
    }

    fetchWebUrl(resUrl, key){
        return new Promise((resolve, reject) =>{
            bucketManager.fetch(resUrl, bucket, key, function(err, respBody, respInfo) {
                if (err) {
                    console.log(err);
                    reject(err) 
                } else {
                if (respInfo.statusCode == 200) { 
                    resolve({
                        hash: respBody.hash,
                        key: respBody.key
                    })
                } else {
                    reject(respBody)
                    console.error(respBody); 
                }
                }
            });
        })
    }

    fetchWebUrlPlus(resUrl, key){
        return new Promise((resolve, reject) =>{
            bucketManager.fetch(resUrl, bucket, key, async function(err, respBody, respInfo) {
                if (err) {
                    console.log(err);
                    reject(err) 
                } else {
                if (respInfo.statusCode == 200) { 
                    resolve({
                        hash: respBody.hash,
                        key: respBody.key,
                        url: await bucketManager.publicDownloadUrl(publicBucketDomain, key)
                    })
                } else {
                    reject(respBody)
                    console.error(respBody); 
                }
                }
            });
        })
    }

    getPublicDownloadUrl(key) {
        return bucketManager.publicDownloadUrl(publicBucketDomain, key);
    }
}
 


module.exports = Qiniu