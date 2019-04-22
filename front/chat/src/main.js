// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client';
Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://localhost:3000?token=12', { path: '/chat' }), //options object is Optional 
})
)

new Vue({
  sockets: {
    connect:  () =>{ 
      console.log('socket connected')
    },
    customEmit: function (val) {
      console.log('this method fired by socket server. eg: io.emit("customEmit", data)')
    },
    typing:function(){

    }
  },
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  methods: {
    clickButton: function (data) {
      // $socket is socket.io-client instance
      this.$socket.emit('add user', 'vue') 
    }
  }, mounted() {
    setTimeout(()=>{
      this.clickButton()
    },1000)
  }
})
