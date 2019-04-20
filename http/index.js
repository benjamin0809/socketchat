const http = require('./http.request') 
const superagent = require('superagent'); //获取网页dom树
require('superagent-proxy')(superagent);
const proxy = 'http://F2846595:mrz0809@10.191.131.156:3128'
let getTokenUrl = 'https://aip.baidubce.com/oauth/2.0/token'; 
let body = {
  grant_type: 'client_credentials',
  client_id: 'b31wn9iriKgKjb6OLLqZzYrh',
  client_secret: 'yLVpKUaK5v4h4LaIufOH8XuxGeytDAlo'
}

let url = `${getTokenUrl}?` 
Object.keys(body).forEach(key=>{
  url += (key + "=" + body[key] + '&')
})
console.log(url)
// http.post(url,body).then(res=>{ 
//   console.log(JSON.stringify(res))
// },err=>{
//   console.log(JSON.stringify(err))
// })


superagent.post(url).proxy(proxy).send(body).set('Accept', 'application/json')
.end((err, res) => {
  err && console.error(err)   

  var token = res.body.access_token;

  let url1 = `https://aip.baidubce.com/rest/2.0/face/v3/faceverify?access_token=${token}`;

    let body1 = [{
      "image": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=319355629,491062307&fm=26&gp=0.jpg",
      "image_type": "URL"  
    },
    {
      "image": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1757550700,1550353629&fm=26&gp=0.jpg",
      "image_type": "URL"  
    } 
    ]
    // body.image = this.base64; 
    superagent.post(url1).proxy(proxy).send(body1).end((err, res) => {
      err && console.error(err)  
      console.log(res.text  )
    })
}) 

// (function(){
  let Url = "http://10.167.66.152/v1/Content/News";
  let body222 = {
    "lang": "en-US",
    "subjectId": 2,
    "skip": 3,
    "take": 4
  } 

  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpUHJvdWQiLCJhdWQiOiI1ODE0MzUxMzU5NDg4MCIsImV4cCI6IjE1NTU3MzAwNjMiLCJuYmYiOiI0LzIwLzIwMTkgMjoxNDoyMiBBTSIsImp0aSI6IjExMSJ9.YDFoBTed1RP1He-KGwo9Y5lD5hFd3FwMuNhmUrR3Ofk";

  let Authorization = {
    key: 'Authorization',
    value: 'Bearar ' + token
  }
  superagent.post(Url).proxy(proxy).send(body222).set(Authorization.key, Authorization.value).end((err, res) => {
    err && console.error(err)  
    console.log(res.text  )
  })
// })()

// superagent.post(url).proxy(proxy).send(body).set('Accept', 'application/json')
// .end((err, res) => {
//   err && console.error(err)   

//   var token = res.body.access_token;

//   let url1 = `https://aip.baidubce.com/rest/2.0/face/v3/faceverify?access_token=${token}`;

//     let body1 = [{
//       "image": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=319355629,491062307&fm=26&gp=0.jpg",
//       "image_type": "URL"  
//     },
//     {
//       "image": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1757550700,1550353629&fm=26&gp=0.jpg",
//       "image_type": "URL"  
//     } 
//     ]
//     // body.image = this.base64; 
//     superagent.post(url1).proxy(proxy).send(body1).end((err, res) => {
//       err && console.error(err)  
//       console.log(res.text  )
//     })
// }) 

// superagent.post(url).proxy(proxy).send(body) 
// .end((err, res) => {
//   err && console.error(err)  
//   console.log(res) 

//   var token = res.body.access_token
// })
// (async ()=>{
//   let getTokenUrl = 'https://aip.baidubce.com/oauth/2.0/token'; 
//   let body = {
//     grant_type: 'client_credentials',
//     client_id: 'b31wn9iriKgKjb6OLLqZzYrh',
//     client_secret: 'yLVpKUaK5v4h4LaIufOH8XuxGeytDAlo'
//   }

//   let url = `${getTokenUrl}?` 
//   Object.keys(body).forEach(key=>{
//     url += (key + "=" + body[key] + '&')
//   })
//   console.log(url)
//   http.post(url,body).subscribe(res=>{ 
//     console.log(JSON.stringify(res))
//   },err=>{
//     console.log(JSON.stringify(err))
//   })
// })()