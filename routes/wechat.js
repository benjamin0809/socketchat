var express = require('express');
var router = express.Router(); 
var utils = require('../utils/utils') 
const http = require('../http/http.request')

const secret = "6d10f84578b70327e4f32fe468a88202"
const appid = "wxc0d14756d7bce74f"
router.post('/getOpenId', async (req, res, next) => {
    const code = req.query.code
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`
    let res = http.get(url)
    res.json(res)
}); 


module.exports = router;
