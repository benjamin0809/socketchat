import user from '../../api/user'
import { setToken } from '../../utils/token'
const state = {
    token: ''
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
      }
}

const actions = {
    login({ commit }, userInfo) {
        const { account, password } = userInfo
        return new Promise((resolve, reject) => {
            user.login( account.trim(), password ).then(response => {
            const { data } = response
            commit('SET_TOKEN', data.userToken)
            setToken(data.userToken)
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
      }
}


export default { 
    state,
    mutations,
    actions
  }
  