function genID(length) {
  return Number(Math.random().toString().substr(3,length) + Date.now()).toString(36);
}
$(function() {
 
  $('.right .content-box').height($('.right').height() - $('.right header').height() - $('.right footer').height()) 
             $('.left li').click(function(){
               $('.chat-title').text($(this).find('.nick').text()) 
               $('.left li').removeClass('liselected')
               $(this).addClass('liselected')
             })
  var FADE_TIME = 150; // ms
  var TYPING_TIMER_LENGTH = 400; // ms
  var COLORS = [
    '#e21400', '#91580f', '#f8a700', '#f78b00',
    '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
    '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
  ];

  var avatars = ['http://image.popochiu.com/32845622-3-thread_28272798_20200307142236_s_70454_o_w_690_h_1211_9965.png']

  // Initialize variables
  var $window = $(window);
  var $usernameInput = $('.usernameInput'); // Input for username
  var $messages = $('.content-box'); // Messages area
  var $inputMessage = $('#inputMessage'); // Input message input box

  var $loginPage = $('.login.page'); // The login page
  var $chatPage = $('.chat.page'); // The chatroom page

  // Prompt for setting a username
  var username = '游客' + genID();

  $('.nickname').text(username)
  var connected = false;
  var typing = false;
  var lastTypingTime;
  var $currentInput = $usernameInput.focus();

  var member_list = []
  var socket = io('/?token=12', {
    path: '/chat'
  });

  

  /**
		 * 将图片转换为Base64
		 */
		function image2Base64(img) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.height);
      var dataURL = canvas.toDataURL("image/png");
      return dataURL;
  }
 
  $('#test').click(function() {
    socket.emit('send room', {message: 'test send room', roomId: 123});
  })
  
$("#imgInput").change(function(){
  // $("#imgs").attr("src",URL.createObjectURL($(this)[0].files[0])); 
  // var img = new Image();
 var fileurl = $(this)[0].files[0]
  // img.src=URL.createObjectURL(fileurl);

  if(!fileurl)return;
  var reader = new FileReader();
  reader.readAsDataURL(fileurl);
  reader.onload = function (e) {  
    $("#imgs").attr("src", this.result);

    sendMessage(this.result,'image')
  }
    // var base64 = image2Base64(img);
    // $("#imgs").attr("src", base64); 

});


  const createModal =  ()=>{
    let str = `
    <div draggable="true" class="modal-container">
      Hello
      <footer>
        <input type='text'/>
      </footer>
    </div>`

    $("body").append(str);
  }
  
  const chatOnMessage =  (chatOnMessage)=>{
    console.log(chatOnMessage)
  }
   
  const addParticipantsMessage = (data) => {
    var message = '';
    if (data.numUsers === 1) {
      message += "there's 1 participant";
    } else {
      message += "there are " + data.numUsers + " participants";
    }
    log(message);
  }
 

  // Sends a chat message
  const sendMessage = (sourceMessage,messageType) => {
    var message = $inputMessage.val();
    // Prevent markup from being injected into the message
    message = cleanInput(message);
    // if there is a non-empty message and a socket connection
    if ((message && connected) || messageType == 'image') {
      $inputMessage.val('');
      if(!messageType)messageType = 'text' ;

      addMessage(true,message)
      // tell server to execute 'new message' and send along one parameter
      socket.emit('new message', {message: sourceMessage || message,type: messageType});
    } 
  }

  // Log a message
    const log = (message, options) => {
    var $el = $('<li>').addClass('log').text(message);
    $('.right ul').append($el)
    // addMessageElement($el, options);
  }

  // Adds the visual chat message to the message list
  const addChatMessage = (data, options) => {
    // Don't fade the message in if there is an 'X was typing'
    var $typingMessages = getTypingMessages(data.message);
    options = options || {};
    if ($typingMessages.length !== 0) {
      options.fade = false;
      $typingMessages.remove();
    }

    var $usernameDiv = $('<span class="username"/>')
      .text(data.username)
      .css('color', getUsernameColor(data.username));
    var $messageBodyDiv = data.type == 'image' ? $('<span class="messageBody">')
    .append(`<img src="${data.message}"/>`) :$('<span class="messageBody">')
    .text(data.message);

     
    var typingClass = data.typing ? 'typing' : '';
    var $messageDiv = $('<li class="message"/>')
      .data('username', data.username)
      .addClass(typingClass)
      .append($usernameDiv, $messageBodyDiv) 

    addMessageElement($messageDiv, options);
  }

  const addMessage = (isSend, content, username)=>{
    $('.right ul').append(messageTemplate(isSend, content,username))
    $messages[0].scrollTop = $messages[0].scrollHeight;
  }

  const messageTemplate = (isSend, message, username) => {
    return isSend ? messageRightTemplate(message) : messageLeftTemplate(message,username)
  }
  const messageLeftTemplate = (content,username) => {
    return `<li class="msg-left">
    <div class="msg-left-box">
        <img class="avatar" src="/images/avatar1.jpg">
        <div class="msg-left-content">
          <p>${username}</p>
          <div class="msg-content left-triangle">${content}</div>
        </div>
        
    </div>
</li>`
  }

  const messageRightTemplate = (content) => {
    return `<li class="msg-right">
                    <div>
                    <div class="msg-content right-triangle ">${content}</div>
                        <img class="avatar" src="/images/avatar1.jpg"> 
                    </div>
                </li>`
  }


  // Adds the visual chat typing message
  const addChatTyping = (data) => {
    data.typing = true;
    // data.message = data.message || 'is typing' ;
    // addChatMessage(data);
  }

  // Removes the visual chat typing message
  const removeChatTyping = (data) => {
    getTypingMessages(data).fadeOut(function () {
      $(this).remove();
    });
  }

  // Adds a message element to the messages and scrolls to the bottom
  // el - The element to add as a message
  // options.fade - If the element should fade-in (default = true)
  // options.prepend - If the element should prepend
  //   all other messages (default = false)
  const addMessageElement = (el, options) => {
    var $el = $(el);

    // Setup default options
    if (!options) {
      options = {};
    }
    if (typeof options.fade === 'undefined') {
      options.fade = true;
    }
    if (typeof options.prepend === 'undefined') {
      options.prepend = false;
    }

    // Apply options
    if (options.fade) {
      $el.hide().fadeIn(FADE_TIME);
    }
    if (options.prepend) {
      $messages.prepend($el);
    } else {
      $messages.append($el);
    }
    $messages[0].scrollTop = $messages[0].scrollHeight;
  }

  // Prevents input from having injected markup
  const cleanInput = (input) => {
    return $('<div/>').text(input).html();
  }

  // Updates the typing event
  const updateTyping = () => {
    if (connected) {
      if (!typing) {
        typing = true;
        socket.emit('typing', {message: $inputMessage.val()});
      }
      lastTypingTime = (new Date()).getTime();

      setTimeout(() => {
        var typingTimer = (new Date()).getTime();
        var timeDiff = typingTimer - lastTypingTime;
        if (timeDiff >= TYPING_TIMER_LENGTH && typing) { 
          typing = false;
        }
      }, TYPING_TIMER_LENGTH);
    }
  }

  // Gets the 'X is typing' messages of a user
  const getTypingMessages = (data) => {
    return $('.typing.message').filter(function (i) {
      return $(this).data('username') === data.username;
    });
  }

  // Gets the color of a username through our hash function
  const getUsernameColor = (username) => {
    // Compute hash code
    var hash = 7;
    for (var i = 0; i < username.length; i++) {
       hash = username.charCodeAt(i) + (hash << 5) - hash;
    }
    // Calculate color
    var index = Math.abs(hash % COLORS.length);
    return COLORS[index];
  }

  // Keyboard events

  $window.keydown(event => {
    // Auto-focus the current input when a key is typed
    if (!(event.ctrlKey || event.metaKey || event.altKey)) {
      $currentInput.focus();
    }
    // When the client hits ENTER on their keyboard
    if (event.which === 13) {
      if (username) {  
        typing = false;
      } else { 
      }
    }
  });

  $('#submit').click(function(event){
    if (username) {
      sendMessage(); 
      typing = false;
    } 
  }) 
  $inputMessage.on('input', () => {
    updateTyping();
  });

  // Click events

  // Focus input when clicking anywhere on login page
  $loginPage.click(() => {
    $currentInput.focus();
  });

  // Focus input when clicking on the message input's border
  $inputMessage.click(() => {
    $inputMessage.focus();
  });

  // Socket events

  // Whenever the server emits 'login', log the login message
  socket.on('login', (data) => {
    connected = true;
    // Display the welcome message
    var message = "Welcome to Socket.IO Chat – ";
    log(message, {
      prepend: true
    });
    // addParticipantsMessage(data); 
  });

  // Whenever the server emits 'new message', update the chat body
  socket.on('new message', (data) => {
    console.log(data) 
    addMessage(false,data.message,data.username)
    if(document.visibilityState == "hidden"){ 
      notification.sendNotification(data)
    }
  });

  socket.on('refresh-list',data =>{  
    var user_list = $('#user-list')
    user_list.empty()

    $('#online_user').empty();
    $('#online_user').append(data.count)
    for(let i = 0;i < data.data.length; i++){
      
      $('#user-list').append(`<li  > 
    <div id="${data.data[i].id}" class="userinfo"> 
      <a class="userid"  a href="javascript:void(0);" onclick="chatOnMessage()">${data.data[i].name}</a>
    </div> 
  </li>  `)
    }
    $('.userinfo').on('click', function(){
      createModal()
      console.dir(this)	
    });
  
  })



  // Whenever the server emits 'user joined', log it in the chat body
  socket.on('user joined', (data) => {
    log(data.username + ' joined');

    
    member_list.push(data)
    // addParticipantsMessage(data);
  });

  // Whenever the server emits 'user left', log it in the chat body
  socket.on('user left', (data) => {
    log(data.username + ' left');
    // addParticipantsMessage(data);
    removeChatTyping(data);
  });

  // Whenever the server emits 'typing', show the typing message
  socket.on('typing', (data) => {
    addChatTyping(data);
  });

 

  socket.on('disconnect', () => {
    log('you have been disconnected');
  });

  socket.on('reconnect', () => {
    log('you have been reconnected');
    if (username) {
      socket.emit('add user', username);
    }
  });
 
  socket.on('reconnect_error', () => {
    log('attempt to reconnect has failed');
  });

  
  setTimeout(()=>{
    socket.emit('add user', username);
    socket.emit('refresh')
    socket.emit('join room', { roomId: 123})
  },500)

});
