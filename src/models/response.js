class Response{
   constructor(data, message, errorCode){
      this.data = data
      this.errorCode = errorCode
      this.message = message
   } 

   toJson(){
      return Object.keys(this).map((key) => { 
         return { [key]: this[key] }
      }).reduce((pre, next) => { 
         return {...pre, ...next}
      },{}) 
   }
}

class ResponseSuccess extends Response{
   constructor(data, message){
      super(data, message || 'success', 0) 
   } 
}

class ResponseError extends Response{
   constructor(name, message, errorCode){
      super(name, message || 'failed', errorCode || -1 ) 
   } 
}

module.exports = {
   ResponseSuccess,
   ResponseError,
   Response
}