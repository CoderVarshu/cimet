class TaskRunner {
  constructor(concurrency) {
    this.concurrency = concurrency
    this.runningTask = 0
    this.thisQueue = []
  }

  push(task) {
    if (this.runningTask < this.concurrency) {
      this.runningTask += 1;
      this.execute(task)
    }
    else {
      this.thisQueue.push(task)
    }

  }

  async execute(task) {

    await task()
    if (this.thisQueue.length) {
      this.runningTask -= 1
      let updateTask = this.thisQueue.shift()
      this.execute(updateTask)
    }
    return
  }
}

function delay(time) {
    return new Promise((res, rej) => {
      setTimeout(() => {
      res("done")
    }, time)
  });
  
}

const t1 = async () => { console.log('t1 started'); await delay(2000); console.log('t1 finished'); };
const t2 = async () => { console.log('t2 started'); await delay(1000); console.log('t2 finished'); };
const t3 = async () => { console.log('t3 started'); await delay(1500); console.log('t3 finished'); };
const t4 = async () => { console.log('t4 started'); await delay(1000); console.log('t4 finished'); };
const t5 = async () => { console.log('t5 started'); await delay(500); console.log('t5 finished'); };

const ex = new TaskRunner(3);

ex.push(t1);
ex.push(t2);
ex.push(t3);
ex.push(t4);
ex.push(t5);