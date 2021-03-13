class Task{
    constructor(task){
        this.task = task;
        this.tasklist = [];
        this.currentTimer = null

    }

    addTask(task){
        this.tasklist.push(task)
    }


    removeTask(task){
        this.tasklist.push(task)
    }

    startTimer(task, context, leading){
        let date = new Date()
         
        const repeat = 60 * 60 * 24 * 1000;
        const firstExec = repeat - date.getTime() + new Date(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`).getTime();
 
        if(leading) {
            task.call(context || this)
        }
        setTimeout(()=>{
            task.call(context || this)
            this.currentTimer = setInterval(()=>{
                task.call(context || this)
            }, repeat)
        }, firstExec)
    }

    cancelTimer(){
        clearInterval(this.currentTimer)
    }

    
    startTimerWithMinute(task, context, leading){
        let date = new Date()
         
        const repeat = 60 * 1000;
        const firstExec = 60 - date.getSeconds()

        if(leading && !this.currentTimer) {
            task.call(context || this)
        }
        setTimeout(()=>{
            task.call(context || this)
            if(this.currentTimer){
                clearInterval(this.currentTimer)
            }

            this.currentTimer = setInterval(()=>{
                task.call( context || this)
            }, repeat)
        }, firstExec * 1000)
    }
}

// const obj = {
//     name : 'benjamin'
// }
// const testFn = ()=> { 
//     console.log(this.name, new Date())
// }
// const task = new Task()
// task.startTimerWithMinute(testFn, obj)


// testFn.bind(obj).call(obj)

module.exports = Task
