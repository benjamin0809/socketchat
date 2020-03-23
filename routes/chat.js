const express = require('express');
const router = express.Router();
const { ResponseSuccess, ResponseError } = require('../models/response')
const ChatDao = require('../modules/chat/chat') 

router.get('/getRoom', function (req, res, next) {
  let id = req.query.id
  const chat = new ChatDao()
  chat.getRoom(id).then(data => {
    const result = new ResponseSuccess(data).toJson()
    res.send(result)
  }).catch(error => {
    const result = new ResponseSuccess(error).toJson()
    res.send(result)
  })
});

router.get('/getRooms', function (req, res, next) {
  const chat = new ChatDao()
  chat.getRooms().then(data => {
    const result = new ResponseSuccess(data).toJson()
    res.send(result)
  }).catch(error => {
    const result = new ResponseSuccess(error).toJson()
    res.send(result)
  })
});

router.get('/getRoomsByUser', function (req, res, next) {
  let userid = req.query.userid
  const chat = new ChatDao()
  chat.getRoomsByUser(userid).then(data => {
    const result = new ResponseSuccess(data).toJson()
    res.send(result)
  }).catch(error => {
    const result = new ResponseSuccess(error).toJson()
    res.send(result)
  })
});

router.post('/createUser', async (req, res, next) => {
  try {
    let name = req.body.name
    let password = req.body.password
    let socketid = req.body.socketid
    const chat = new ChatDao()

    const data = await chat.createUser({
      name,password,socketid
    }) 
    const result = new ResponseSuccess(data).toJson()
    res.send(result)
  }
  catch (error) {
    const result = new ResponseSuccess(error).toJson()
    res.send(result)
  }
});

router.post('/updateUser', async (req, res, next) => {
  try {
    let id = req.body.id
    let name = req.body.name
    let password = req.body.password
    let socketid = req.body.socketid
    const chat = new ChatDao()

    const data = await chat.updateUser({
      name,password,socketid,id
    }) 
    const result = new ResponseSuccess(data).toJson()
    res.send(result)
  }
  catch (error) {
    const result = new ResponseSuccess(error).toJson()
    res.send(result)
  }
});

router.post('/deleteUser', async (req, res, next) => {
  try {
    let id = req.body.id
    const chat = new ChatDao()

    const data = await chat.deleteUser(id) 
    const result = new ResponseSuccess(data).toJson()
    res.send(result)
  }
  catch (error) {
    const result = new ResponseSuccess(error).toJson()
    res.send(result)
  }
});

router.post('/createRoom', async (req, res, next) => {
  try { 

    let name = req.body.name
    let password = req.body.password
    let description = req.body.description
    let avatar = req.body.avatar
    const chat = new ChatDao()

    const data = await chat.createRoom({
      name,password,description,avatar
    }) 
    const result = new ResponseSuccess(data).toJson()
    res.send(result)
  }
  catch (error) {
    const result = new ResponseSuccess(error).toJson()
    res.send(result)
  }
});

router.post('/updateRoom', async (req, res, next) => {
  try { 
    let id = req.body.id
    let name = req.body.name
    let password = req.body.password
    let description = req.body.description
    let avatar = req.body.avatar
    const chat = new ChatDao()

    const data = await chat.updateRoom({
      name,password,description,avatar,id
    }) 
    const result = new ResponseSuccess(data).toJson()
    res.send(result)
  }
  catch (error) {
    const result = new ResponseSuccess(error).toJson()
    res.send(result)
  }
});

router.post('/deleteRoom', async (req, res, next) => {
  try {
    let id = req.body.id
    const chat = new ChatDao()

    const data = await chat.deleteRoom(id) 
    const result = new ResponseSuccess(data).toJson()
    res.send(result)
  }
  catch (error) {
    const result = new ResponseSuccess(error).toJson()
    res.send(result)
  }
});

router.post('/joinRoom', async (req, res, next) => {
  try {  
    let userid = req.body.userid
    let roomid = req.body.roomid
    const chat = new ChatDao() 
    const data = await chat.joinRoom(userid,roomid) 
    const result = new ResponseSuccess(data).toJson()
    res.send(result)
  }
  catch (error) {
    const result = new ResponseSuccess(error).toJson()
    res.send(result)
  }
});

router.post('/joinRoomSocketName', async (req, res, next) => {
  try {  
    let username = req.body.username
    let roomid = req.body.roomid
    const chat = new ChatDao() 
    const data = await chat.joinRoomSocketName(username,roomid) 
    const result = new ResponseSuccess(data).toJson()
    res.send(result)
  }
  catch (error) {
    const result = new ResponseSuccess(error).toJson()
    res.send(result)
  }
});
 

module.exports = router;
