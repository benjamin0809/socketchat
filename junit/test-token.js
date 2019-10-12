 
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
// console.log(token)


// var token1 = jwt.sign({
//   data: 'foobar'
// }, 'secret', { expiresIn: 60 * 60 });


// console.log(token1)


// var decoded = jwt.verify(token, 'shhhhh');
// console.log(decoded.foo) // bar

const secret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
var jwt = require('jsonwebtoken');
var token = jwt.sign({ name: 'benjamin' }, secret ,{ expiresIn: 6   });
console.log(token)



setTimeout(()=>{ 
  jwt.verify(token, secret, function(err, decoded) {
    if(err){
      console.error(err)
    }
    console.log(decoded) // bar
  });
},5 * 1000)

setTimeout(()=>{ 
  jwt.verify(token, secret, function(err, decoded) {
    if(err){
      console.error(err)
    }
    console.log(decoded) // bar
  });
},7 * 1000)