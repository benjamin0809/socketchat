var express = require('express');
var router = express.Router();
const ChatDao = require('../modules/chat/chat') 

router.get('/getRoom', function (req, res, next) {
  let id = req.query.id
  const chat = new ChatDao()
  chat.getRoom(id).then(data => {
    res.send(JSON.stringify(data))
  }).catch(error => {
    res.send(JSON.stringify(error))
  })
});

router.get('/getRooms', function (req, res, next) {
  const chat = new ChatDao()
  chat.getRooms().then(data => {
    res.send(JSON.stringify(data))
  }).catch(error => {
    res.send(JSON.stringify(error))
  })
});

router.get('/getRoomsByUser', function (req, res, next) {
  let userid = req.query.userid
  const chat = new ChatDao()
  chat.getRoomsByUser(userid).then(data => {
    res.send(JSON.stringify(data))
  }).catch(error => {
    res.send(JSON.stringify(error))
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
    res.json(data)
  }
  catch (error) {
    res.send(JSON.stringify(error))
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
    res.json(data)
  }
  catch (error) {
    res.send(JSON.stringify(error))
  }
});

router.post('/deleteUser', async (req, res, next) => {
  try {
    let id = req.body.id
    const chat = new ChatDao()

    const data = await chat.deleteUser(id) 
    res.json(data)
  }
  catch (error) {
    res.send(JSON.stringify(error))
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
    res.json(data)
  }
  catch (error) {
    res.send(JSON.stringify(error))
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
    res.json(data)
  }
  catch (error) {
    res.send(JSON.stringify(error))
  }
});

router.post('/deleteRoom', async (req, res, next) => {
  try {
    let id = req.body.id
    const chat = new ChatDao()

    const data = await chat.deleteRoom(id) 
    res.json(data)
  }
  catch (error) {
    res.send(JSON.stringify(error))
  }
});

router.post('/joinRoom', async (req, res, next) => {
  try {  
    let userid = req.body.userid
    let roomid = req.body.roomid
    const chat = new ChatDao() 
    const data = await chat.joinRoom(userid,roomid) 
    res.json(data)
  }
  catch (error) {
    res.send(JSON.stringify(error))
  }
});
 

module.exports = router;
