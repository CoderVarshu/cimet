class TaskRunner {
    constructor(concurrency) {
      // write your code below

      this.concurrency = concurrency
      this.runningTask = 0
      this.thisQueue = []
    }
  
    push(task) {
      // write your code below
      this.thisQueue.append(task)
      this.runNext()
    }

    runNext(){
      
    }
  }