const Sequelize = require('sequelize');
const conf = require('../config/dev.conf')
var sequelize = new Sequelize(conf.db.database, conf.db.user, conf.db.password, {
  host: conf.db.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
 
});

var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model 对应的表名将与model名相同
});

// User.sync({force: true}).then(function () {
//   // 已创建数据表
//   return User.create({
//     firstName: 'John',
//     lastName: 'Benjamin'
//   });
// });
User.create({
  firstName: 'John',
  lastName: 'Benjamin'
}).then(res=>{
  console.log(res)
});

// User.findAll({
//   where: {
//     firstName: 'John'
//   }
// }).then(res=>{
  
//   res.forEach((item) =>{
//     // console.log(item)
//   })
// }) ; 