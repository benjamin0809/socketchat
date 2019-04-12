 
var numUsers = 0; 
class WebSocket{
  constructor(socket,io){  
    this.addedUser = false;
    this.socket = socket;
    this.io = io;

    this.newMessage();
    this.refresh();
    this.addUser();
    this.typing();
    this.stopTyping();
    this.disconnect();
  }
  joinRoom (socket, roomId){
    socket.join(roomId)
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
      ++numUsers;
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
      this.socket.broadcast.emit('typing', {
        username: this.socket.username,
        message: data.message
      });
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
        --numUsers; 
        // echo globally that this client has left
        this.socket.broadcast.emit('user left', {
          username: this.socket.username,
          numUsers: numUsers
        });
      }
    });
  } 
}



module.exports = WebSocket;