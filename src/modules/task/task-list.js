const Task = require('./task')
const Spider = require('../../utils/spider') 
const spider = new Spider();
const hupuTask = new Task()  

const hupu_base_url = 'https://m.hupu.com/bbs/'
const spiderAction = async() => {
  const base_url = hupu_base_url + '4614'
  let tasks = []
  const limit = 2, offset = 0;
  for (let i = offset; i < limit + offset; i++) {
    const http_url = i == 0 ? base_url : base_url + '-' + (i + 1);
    tasks.push(spider.getMobileHupuImages(http_url));
  }

  await Promise.all(tasks) 
  // spiderAction1()
  
}

const spiderAction1 = async() => {
  const base_url = hupu_base_url + '4846'
  let tasks = []
  const limit = 2, offset = 0;
  for (let i = offset; i < limit + offset; i++) {
    const http_url = i == 0 ? base_url : base_url + '-' + (i + 1);
    tasks.push(spider.getMobileHupuImages(http_url));
  }

  await Promise.all(tasks) 

  
}



class TaskList{
  constructor(){

  }
  start(){
    hupuTask.startTimer(spiderAction, spiderAction, true)
  }
}
module.exports = TaskList