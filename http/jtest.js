const http = require('./http.request')    
const path = require('path')
let getTokenUrl = '/v1/users/register'; 
let body = {"account":"YB_TA",
"password":"Welcome@123456",
"nickname":"benjamin"
}    
 
// {
// 	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0OTMwMTU2OTc0NTgwNzQzMSIsImlhdCI6MTU2OTc0NTgwNywiZXhwIjoxNTcyMzM3ODA3fQ.phXXSwjICmZ_u_VJjviRZxvkjLfQ2uT5B4UDTl3oo2Y",
// 	"userToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0OTMwMTU2OTc0NTgwNzQzMSIsImlhdCI6MTU2OTc0NTgwNywiZXhwIjoxNTcyMzM3ODA3fQ.phXXSwjICmZ_u_VJjviRZxvkjLfQ2uT5B4UDTl3oo2Y",
// 	"userId": "49301569745807431"
// }
let url = `${getTokenUrl}?`   
http.post(url,body,{
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpUHJvdWQiLCJhdWQiOiI1MDcwOTE3MTg1NzQwOCIsImV4cCI6IjE1NjAzODc3MjYiLCJuYmYiOiI1LzE0LzIwMTkgMTowMjowNiBBTSIsImp0aSI6IjExMSJ9.T-LqqW6NtfYSmFADWXZPDOFjjQa4c50G4ju2kHcoKQI'
}).then(res=>{ 
  console.log(JSON.stringify(res))
},err=>{
  console.log(JSON.stringify(err))
})

const public = () => {
	return path.resolve(__dirname,'public/upload')
}

const public1 = () => {
	return path.resolve(__dirname,'/public/upload')
}

console.log(public.call(), public1.call())

