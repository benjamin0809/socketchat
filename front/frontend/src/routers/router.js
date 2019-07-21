 
import Home from '../page/home'
import Management from '../view/Management'
import Upload from '../view/Upload'  
import File from '../view/File'  
import App from '../App' 
import VueRouter from 'vue-router'

const routes = [ {
      path: '/',  
      component: App,
      redirect: '/login',
      children: [{ 
        path: '/file',
        component: Home,
        redirect: '/file/home',
          children: [{
            path : 'home',
            name: 'home',
            component: File
          }, 
          {
            path : 'management',
            name: 'management',
            component: Management
          },
          {
            path : 'upload',
            name: 'upload',
            component: Upload
          }
        ]
      }, {
        path: '/login',
        name: 'login',
        component: r => require.ensure([], () => r(require('../view/login')), 'login')

    }]
      
    }
  ] 
 

  const router = new VueRouter({
    routes
  })

  export default router