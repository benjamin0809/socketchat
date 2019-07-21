import request from '../request/index'




const getUser = (token) =>{

}

const login = (account, password) =>{
    return request.post({
        url: 'users/login',
        data: {
            account,
            password
        }
    })
}

export default {
    login
}