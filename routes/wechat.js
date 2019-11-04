var express = require('express');
var router = express.Router(); 
const superagent = require('superagent');
var http = require("http");
var utils = require('../utils/utils')  
const { ResponseSuccess, ResponseError } = require('../models/response')

const secret = "6d10f84578b70327e4f32fe468a88202"
const appid = "wxc0d14756d7bce74f"
 

router.get('/getOpenId', async (req, res, next) => {
    const code = req.query.code

    if(!code){
        res.json(new ResponseError("code is empty").toJson())
    }
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`
     
    superagent.get(url) 
    .end((err, result) => {
        if(err) {
            res.json(new ResponseError(err).toJson())
        } 
        const testJSON = JSON.parse(result.text)
        if(!testJSON.errcode){
            res.json(new ResponseSuccess(testJSON).toJson()) 
        }else{
            res.json(new ResponseError(testJSON).toJson()) 
        }
        
    })
    
}); 

module.exports = router;
