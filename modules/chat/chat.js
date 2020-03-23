
const sqlUtils = require('../../database/sql.utils.js')
const utils = require('../../utils/utils')
const table_room = 'chat_room'
const table_user = 'chat_user'
const table_user_room = 'chat_user_room'
class ChatDao {
    constructor() {
        this.sqlUtils = new sqlUtils()
    }

    /**
     * 创建 用户
     * @param {*} entity 
     */
    async createUser(entity){
      if(!entity) {
        throw new Error('create user failed, entity is empty')
      }

      if(!entity.name) {
        throw new Error('create user failed, name is empty')
      }
      const sql = `insert into ${table_user} (name, password, socketid) VALUES (?, ?, ?);`
      const params = []
      params.push(entity.name)
      params.push(entity.password)
      params.push(entity.socketid)

      const check_sql =`select id from ${table_user} where name = ?`
      const check_params = [entity.name]
      const check_result = await this.sqlUtils.queryWithParams(check_sql, check_params)
      if(check_result.length > 0) {
        return check_result[0].id
      }
      
      const result = await this.sqlUtils.queryWithParams(sql, params)
      return result.insertId
    }

    /**
     * 更新 用户
     * @param {*} entity 
     */
    updateUser(entity){
      if(!entity) {
        throw new Error('update user failed, entity is empty')
      }
      if(!entity.id) {
        throw new Error('update user failed, id is empty')
      }
      const sql = `update ${table_user} set name = ?, password = ?, socketid = ? where id = ?;`
      const params = []
      params.push(entity.name)
      params.push(entity.password)
      params.push(entity.socketid)
      params.push(entity.id)
      return this.sqlUtils.queryWithParams(sql, params)
    }

    /**
     * 删除 用户 ，同时删除关联表数据
     * @param {*} id 
     */
    deleteUser(id){
      if(!id) {
        throw new Error('delete user failed, id is empty')
      }
      const sql = `delete ${table_user} where id = ?;delete ${table_user_room} where userid = ? `
      const params = []
      params.push(entity.id)
      params.push(entity.id)
      return this.sqlUtils.queryWithParams(sql, params)
    }

    /**
     * 获取房间信息
     * @param {*} roomid 房间id
     */
    getRoom(roomid) {
        let sql = `SELECT * from ${table_room} where id = ?`
        let params = [roomid]
        return this.sqlUtils.queryWithParams(sql, params);
    }

      /**
     * 获取所有房间信息 
     */
    getRooms() {
      let sql = `SELECT * from ${table_room}`
      let params = []
      return this.sqlUtils.queryWithParams(sql, params);
    }

    /**
     * 获取房间
     * @param {*} userid 
     */
    getOtherRooms(userid) {
      let sql = `SELECT room.name, room.id, room.avatar from 
      ${table_room} room where room.id not in (
          select user_room.roomid
              from ${table_user_room} user_room 
              inner join 
              ${table_user} user on user.id = user_room.userid
              where user.id = ?
      )`
      let params = [userid]
      return this.sqlUtils.queryWithParams(sql, params);
    }

    /**
     * 获取房间
     * @param {*} userid 
     */
    getRoomsByUser(userid) {
      let sql = `SELECT room.name, room.id, room.avatar from 
      ${table_user} user 
      inner join 
      ${table_user_room} user_room on user.id = user_room.userid
      inner join 
      ${table_room} room on user_room.roomid = room.id
      where user.id = ?`
      let params = [userid]
      return this.sqlUtils.queryWithParams(sql, params);
    }
 
    /**
     * 创建 房间
     * @param {*} entity 
     */
    createRoom(entity) {
        if(!entity) {
          throw new Error('entity is empty')
        }
        const sql = `insert into ${table_room} (name, description, password, avatar) VALUES (?, ?, ?, ?);`
        const params = []
        params.push(entity.name)
        params.push(entity.description)
        params.push(entity.password)
        params.push(entity.avatar) 

        return this.sqlUtils.queryWithParams(sql, params)
    }  

    /**
     * 更新房间信息
     * @param {*} entity 
     */
    updateRoom(entity) {
      if(!entity) {
        throw new Error('updateRoom failed,entity is empty')
      }
      if(!entity.id) {
        throw new Error('updateRoomfailed, id is empty')
      }
      const sql =  `update ${table_room} set name = ?, description = ?, password = ?, avatar = ? where id = ?;`
      const params = []
      params.push(entity.name)
      params.push(entity.description)
      params.push(entity.password)
      params.push(entity.avatar) 
      params.push(entity.id) 

      return this.sqlUtils.queryWithParams(sql, params)
    }  

      /**
     * 删除 房间 ，同时删除关联表数据
     * @param {*} id 
     */
    deleteRoom(id){
      if(!id) {
        throw new Error('deleteRoom failed, id is empty')
      }
      const sql = `delete ${table_room} where id = ?;delete ${table_user_room} where roomid = ? `
      const params = []
      params.push(entity.id)
      params.push(entity.id)
      return this.sqlUtils.queryWithParams(sql, params)
    }

    /**
     * 加入房间
     * @param {*} userid 用户id
     * @param {*} roomid 房间id
     */
    joinRoom(userid, roomid){
      if(!userid) {
        throw new Error('joinRoom failed, userid is empty')
      }
      if(!roomid) {
        throw new Error('joinRoom failed,roomid is empty')
      }
      const sql = `insert into ${table_user_room} (userid, roomid) VALUES (?, ?);`
      const params = []
      params.push(userid)
      params.push(roomid)

      return this.sqlUtils.queryWithParams(sql, params)
    }

      /**
     * 加入房间
     * @param {*} username 用户id
     * @param {*} roomid 房间id
     */
    joinRoomSocketName(username, roomid){
      if(!username) {
        throw new Error('joinRoom failed, username is empty')
      }
      if(!roomid) {
        throw new Error('joinRoom failed,roomid is empty')
      }
      const sql = `insert into ${table_user_room} (userid, roomid) VALUES (?, ?);`
      const params = []
      params.push(userid)
      params.push(roomid)

      return this.sqlUtils.queryWithParams(sql, params)
    }
}


module.exports = ChatDao