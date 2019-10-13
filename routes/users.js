var express = require('express');
var router = express.Router();
const UserDao = require('../modules/user/user')
var utils = require('../utils/utils')
const token = require('../utils/token')

router.all('/getUser', function (req, res, next) {
  let id = req.query.id
  const user = new UserDao()
  user.getUser(id).then(data => {
    res.send(JSON.stringify(data))
  }).catch(error => {
    res.send(JSON.stringify(error))
  })
});

router.post('/login', async (req, res, next) => {
  try {
    let account = req.body.account
    let password = req.body.password
    const user = new UserDao()

    const data = await user.login(account, password)
    const userId = data.data.userId
    const result = {
      accessToken: token.generateAccessToken(userId),
      userToken: token.generateAccessToken(userId),
      userId: userId
    }
    res.json(result)
  }
  catch (error) {
    res.send(JSON.stringify(error))
  }
});

router.post('/register', async (req, res, next) => {
  try {
    const user = new UserDao()
    let account = req.body.account
    let password = req.body.password
    let nickname = req.body.nickname
    const data = await user.register(account, password, nickname)
    const userId = data.data.userId
    const result = {
      accessToken: token.generateAccessToken(userId),
      userToken: token.generateAccessToken(userId),
      userId: userId
    }
    res.json(result)
  } catch (error) {
    res.send(JSON.stringify(error))
  }

});


module.exports = router;
