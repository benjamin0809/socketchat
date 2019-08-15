const { ResponseSuccess, ResponseError } = require('../models/response')



const getUser = () => {

  return new Promise((resolve, reject) => {
    const arr = Array(10).fill({
      name: 'benjamin',
      id : 0
    })
    const newarr = arr.map((item, index, array) => { 
      const newitem = { ...item }
      newitem.name += index 
      newitem.id = index  
      return newitem
    })  
    // console.log(arr)
    Math.random() > 0.5 ? resolve(newarr) : reject([])
  })
   
}
 
getUser().then(res => {
  console.dir(new ResponseSuccess(res).toJson())
}).catch(err => {
  console.dir(new ResponseError(err).toJson()) 
})
 
