import axios from 'axios'
import store  from '../store' 
import { getToken, setToken } from '../utils/token'
const service = axios.create({
    baseURL: location.host != "127.0.0.1:8010" ? 'http://www.popochiu.com/api/' : 'http://127.0.0.1:8010/api/',
    timeout: 15000,
    headers: { ContentType: 'application/json'}
})

// request interceptor
service.interceptors.request.use(
    config => {
      // do something before request is sent
  
      if (store.getters.token) {
        // let each request carry token
        // ['X-Token'] is a custom headers key
        // please modify it according to the actual situation
        config.headers['token'] = getToken()
      }
      return config
    },
    error => {
      // do something with request error
      console.log(error) // for debug
      return Promise.reject(error)
    }
  )


service.interceptors.response.use(
    function(response){
        return Promise.resolve(response)
    },
    function(error){
        console.log(error)
        if(error.response.status === 401){
            setToken("")
            location.reload()
        }
    }
)

export default service