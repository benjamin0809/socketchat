const getQueryString = (name,url)=> { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = url.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); return null; 
}

module.exports = {
    getQueryString: getQueryString
}

