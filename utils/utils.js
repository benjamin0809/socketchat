const getQueryString = (name,url)=> { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = url.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); return null; 
}
/*
* @param  {String} str
* @param  {String} charset utf-8, utf-16
* @return {Number}
*/
const sizeof = (str, charset) => {
   let total = 0,
       charCode,
       i,
       len;
   charset = charset ? charset.toLowerCase() : '';
   if(charset === 'utf-16' || charset === 'utf16'){
       for(i = 0, len = str.length; i < len; i++){
           charCode = str.charCodeAt(i);
           if(charCode <= 0xffff){
               total += 2;
           }else{
               total += 4;
           }
       }
   }else{
       for(i = 0, len = str.length; i < len; i++){
           charCode = str.charCodeAt(i);
           if(charCode <= 0x007f) {
               total += 1;
           }else if(charCode <= 0x07ff){
               total += 2;
           }else if(charCode <= 0xffff){
               total += 3;
           }else{
               total += 4;
           }
       }
   }
   return total;
}

const genereateId = () => {
    return Math.floor(Math.random() * 10000).toString() + 
    Date.now()
}


module.exports = {
    getQueryString,
    sizeof,
    genereateId
}

