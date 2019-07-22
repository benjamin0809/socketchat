import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
import router from './routers/router'
import VueRouter from 'vue-router'
import store from './store'
Vue.use(ElementUI)
 
Vue.use(VueRouter) 
import './routers/router-guard'

import VueQuillEditor from 'vue-quill-editor'


Vue.use(VueQuillEditor, /* { default global options } */)
new Vue({
  el: '#app',
  router ,
  store
  
}) 
