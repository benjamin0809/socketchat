const express = require('express');
const router = express.Router(); 
const ChatDao = require('../modules/chat/chat') 

router.get('/getRoom', function (req, res, next) {
  let id = req.query.id
  const chat = new ChatDao()
  chat.getRoom(id).then(data => { 
    res.success(data)
  }).catch(error => { 
    res.error(result)
  })
});

router.get('/getRooms', function (req, res, next) {
  const chat = new ChatDao()
  chat.getRooms().then(data => {
        res.success(data)
    res.send(result)
  }).catch(error => {
    res.error(error) 
  })
});

router.get('/getRoomsByUser', function (req, res, next) {
  let userid = req.query.userid
  const chat = new ChatDao()
  chat.getRoomsByUser(userid).then(data => {
        res.success(data)
    res.send(result)
  }).catch(error => {
    res.error(error) 
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
    res.success(data) 
  }
  catch (error) {
    res.error(error) 
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
    res.success(data) 
  }
  catch (error) {
    res.error(error) 
  }
});

router.post('/deleteUser', async (req, res, next) => {
  try {
    let id = req.body.id
    const chat = new ChatDao()

    const data = await chat.deleteUser(id) 
    res.success(data)
  }
  catch (error) {
    res.error(error)
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
        res.success(data)
    res.send(result)
  }
  catch (error) {
    res.error(error)
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
    res.success(data)
  }
  catch (error) {
    res.error(error)
  }
});

router.post('/deleteRoom', async (req, res, next) => {
  try {
    let id = req.body.id
    const chat = new ChatDao()

    const data = await chat.deleteRoom(id) 
    res.success(data)
  }
  catch (error) {
    res.error(error)
  }
});

router.post('/joinRoom', async (req, res, next) => {
  try {  
    let userid = req.body.userid
    let roomid = req.body.roomid
    const chat = new ChatDao() 
    const data = await chat.joinRoom(userid,roomid) 
    res.success(data)
  }
  catch (error) {
    res.error(error)
  }
});

router.post('/joinRoomSocketName', async (req, res, next) => {
  try {  
    let username = req.body.username
    let roomid = req.body.roomid
    const chat = new ChatDao() 
    const data = await chat.joinRoomSocketName(username,roomid) 
    res.success(data)
  }
  catch (error) {
    res.error(error)
  }
});
 

module.exports =  { router, alias:'/webchat' };
