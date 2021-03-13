const jwt = require('jsonwebtoken');
const userToken_expiresIn  = 60 * 60 * 2 // 两个小时
const accessToken_expiresIn = 60 * 60 * 24 * 30 // 一个月
const secret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'

class Token{
  constructor(){ 
  }

  /**
   * 生成 userToken 
   * @param {*} userId 
   */
  static generateUserToken(userId){ 
    return jwt.sign({ userId: userId }, secret, { expiresIn: userToken_expiresIn });
  }

  /**
   * 生成 AccessToken 
   * @param {*} userId 
   */
  static generateAccessToken(userId){
    return jwt.sign({ userId: userId }, secret, { expiresIn: accessToken_expiresIn });
  }

  /**
   * 生成 自定义事件token
   * @param {*} userId 
   */
  static generateCustomToken(userId, expiresIn){
    return jwt.sign({ userId: userId }, secret, { expiresIn: expiresIn });
  }

  /**
   * 验证 token
   * @param {*} token 
   */
  static validToken(token){
    try{
      let userId = jwt.verify(token, secret).userId;
      return userId
    }catch(e){
     return null
    } 
  }
}
 
module.exports = Token