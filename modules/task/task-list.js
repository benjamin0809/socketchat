const Task = require('./task')
const Spider = require('../../utils/spider') 
const spider = new Spider();
const hupuTask = new Task() 
const spiderAction = () => {
  const base_url = 'https://bbs.hupu.com/selfie'
  let tasks = []
  const limit = 2, offset = 0;
  for (let i = offset; i < limit + offset; i++) {
    const http_url = i == 0 ? base_url : base_url + '-' + (i + 1);
    tasks.push(spider.getHupuImages(http_url));
  }

  Promise.all(tasks).then(result => {
     
  }).catch(error => {
     
  })
}



class TaskList{
  constructor(){

  }
  start(){
    hupuTask.startTimer(spiderAction, spiderAction, true)
  }
}
module.exports = TaskList