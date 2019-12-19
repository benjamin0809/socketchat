var fs = require('fs')
  , gm = require('gm').subClass({imageMagick: true})
  , path = require('path'); 

  var buf = require('fs').readFileSync(path.resolve(__dirname,'../public/images/avatar1.jpg'));
  var source = gm(path.resolve(__dirname,'../public/images/avatar1.jpg'))
  var size = source.size(function(err, value){
    console.log(err)
    console.log(value)
  })
  console.log(size)