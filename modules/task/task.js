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

    startTimer(task){
        let date = new Date()
         
        const repeat = 60 * 60 * 24 * 1000;
        const firstExec = repeat - date.getTime() + new Date(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`).getTime();

        console.log(firstExec)
        setTimeout(()=>{
            task.call(this)
            setInterval(()=>{
                task.call(this)
            }, repeat)
        }, firstExec)
    }

    
    startTimerWithMinute(task){
        let date = new Date()
         
        const repeat = 60 * 1000;
        const firstExec = 60 - date.getSeconds()

        console.log(firstExec)
        setTimeout(()=>{
            task.call(this)
            if(this.currentTimer){
                clearInterval(this.currentTimer)
            }

            this.currentTimer = setInterval(()=>{
                task.call(this)
            }, repeat)
        }, firstExec * 1000)
    }
}


const testFn = ()=> {
    console.log(new Date())
}
const task = new Task()
task.startTimerWithMinute(testFn)