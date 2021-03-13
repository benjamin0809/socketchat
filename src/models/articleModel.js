module.exports = [{
  key: 'id',
  default: null 
},{
  key: 'subjectid',
  default: +new Date(),
  require: true
},{
  key: 'title', 
  require: true
},{
  key: 'content' 
},{
  key: 'status',
  default: 0 
},{
  key: 'ispush',  
  default: 0  
},{
  key: 'abstract' 
},{
  key: 'redirecturl', 
},{
  key: 'bannerurl' 
},{
  key: 'author' 
},{
  key: 'mediaid' 
},{
  key: 'readqty' 
},{
  key: 'likeqty' 
},{
  key: 'shareqty' 
},{
  key: 'lastmodifieruserid' 
},{
  key: 'lastmodificationtime' ,
  default: new Date(),
},{
  key: 'creationtime'   ,
  default: new Date()
},{
  key: 'creatoruserid' 
},{
  key: 'ispublish' 
},{
  key: 'publishtime'  ,
  default: new Date()
},{
  key: 'url' 
},{
  key: 'topping' 
}] 