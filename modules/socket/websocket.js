 
global_rooms = new Map()
class WebSocket{
  constructor(socket,io){  
    this.addedUser = false;
    this.socket = socket;
    this.io = io; 
    this.funcArr = ['newMessage','refresh','addUser','typing','stopTyping','disconnect','joinRoom','sendRoomMessage']
 
    this.funcArr.forEach(func=>{
      this[func]();
    }) 
  }

  // addSocket(socket){
  //   socket.
  // }
  // joinRoom (socket, roomId){
  //   socket.join(roomId)
  // }

  addPoolRooms(socketId, roomId) {
    if(roomId instanceof Array) {
      for(let id of roomId) {
        var tmp = global_rooms.get(id)
        if(tmp) {
          tmp.add(socketId) 
        }else{
          global_rooms.set(id, new Set([socketId])) 
        }
      }
    }else {
      var tmp = global_rooms.get(roomId)
        if(tmp) {
          tmp.add(socketId) 
        }else{
          global_rooms.set(roomId, new Set([socketId])) 
        }
    }
  }

  removePoolRooms(socketId) {
    for(let item of global_rooms.values()){
      if(item.has(socketId)) {
        item.delete(socketId)
      }
    }
  }

  toJsonPoolRooms() {
    let result = []
    for(let [name, value] of global_rooms.entries()){
      result.push({
        room: name,
        users: [...value]
      })
    }
    return result
  }
  
  joinRoom (){
    this.socket.on('join room', (data) => {  
      this.addPoolRooms(this.socket.id, data.roomId)
      this.socket.join(data.roomId) 
    });
  }

  sendRoomMessage (){
    this.socket.on('send room', (data) => {  
      this.socket.to(data.roomId).emit('new message', {
        message: data.message,
        username: this.socket.username,
        roomId: data.roomId
      })
    });
  }

  isValid(token){
    return !!token;
  }
  newMessage(){
    this.socket.on('new message', (data) => {  
      this.socket.broadcast.emit('new message', {
        username: this.socket.username,
        message: data.message,
        type: data.type
      });
    });
  }

  getSocketsCount(){
    let sockets = this.io.sockets.sockets; 
    return Object.keys(sockets).length
  }
  refresh_list(){
    let datalist = []
    let sockets = this.io.sockets.sockets; 
    let keys = Object.keys(sockets)
    for(let i = 0; i < keys.length; i++){
      datalist.push({name: sockets[keys[i]].username, id: sockets[keys[i]].id})
    }
    for(let i = 0; i < keys.length; i++){
      sockets[keys[i]].emit('refresh-list', {
        data: datalist,
        rooms: this.toJsonPoolRooms(),
        count: datalist.length
      })
    } 
  }

  refresh(){
    this.socket.on('refresh',()=>{
      this.refresh_list()
    })
  }
  
  addUser(){
    this.socket.on('add user', (username) => {
      if (this.addedUser) return;
  
      // we store the username in the socket session for this client
      this.socket.username = username;
      let numUsers = this.getSocketsCount();
      this.addedUser = true;
      
      this.socket.emit('login', {
        numUsers: numUsers
      });
      // echo globally (all clients) that a person has connected
      this.socket.broadcast.emit('user joined', {
        username: this.socket.username,
        numUsers: numUsers,
        socketId: this.socket.id
      });
      this.refresh_list()
    });
  } 

  typing(){
    this.socket.on('typing', (data) => {
      // this.socket.broadcast.emit('typing', {
      //   username: this.socket.username,
      //   message: data.message
      // });
    });
  } 

  stopTyping(){
    this.socket.on('stop typing', () => {
      this.socket.broadcast.emit('stop typing', {
        username: this.socket.username
      });
    });
  }
 

  disconnect(){ 
    this.socket.on('disconnect', () => {
      if (this.addedUser) { 
        this.removePoolRooms(this.socket.id)
        // echo globally that this client has left
        this.socket.broadcast.emit('user left', {
          username: this.socket.username,
          numUsers: this.getSocketsCount()
        });
      }
    });
  } 
}



module.exports = WebSocket;