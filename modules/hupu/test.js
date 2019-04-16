const HupuDao = require('./hupu.js');

let hupuDao = new HupuDao()

let hupuEntity = {
    id : 123456,
    articleid :268473394,
    title: 'test',
    avatar :'ttt',
    username :'benjamin',
    images:[],
    createTime :'2019-08-09 17:15:55',
    modifiedTime: null,
}
hupuDao.insertHupuImages(hupuEntity).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})


// hupuDao.getAllHupuImages().then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })

// hupuDao.getHupuImages().then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })