class Simple{
  constructor(name){
    this.name = name
  }

  testFn(){
    console.log(this.name, new Date())
  }
}

const Task = require('../modules/task/task')


const task = new Task()

const simple = new Simple('Test')
task.startTimerWithMinute(simple.testFn, simple, true)