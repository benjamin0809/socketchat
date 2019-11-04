var express = require('express');
var router = express.Router(); 
var utils = require('../utils/utils') 
const http = require('../http/http.request')
const { ResponseSuccess, ResponseError } = require('../models/response')

const secret = "6d10f84578b70327e4f32fe468a88202"
const appid = "wxc0d14756d7bce74f"
router.get('/getOpenId', async (req, res, next) => {
    const code = req.query.code

    if(!code){
        res.json(new ResponseError("code is empty").toJson())
    }
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`


    try {
        let result = http.get(url)
        res.json(new ResponseSuccess(result).toJson())
    } catch (e) {
        res.json(new ResponseError(e).toJson())
    } 
}); 


module.exports = router;
