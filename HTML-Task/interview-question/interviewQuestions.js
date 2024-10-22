function createCounterPromise(maxCount = 3, timeoutMs = 5000) {

    let id;
    let canceled = false;
    let timer = 1000
    const promise = new Promise((resolve, reject) => {

        let count = 1
        id = setInterval(() => {
            
            console.log(`Counter ${count}`)

            if (canceled) {
                clearInterval(id);
                console.log(`Operation canceled after ${timer * count}  mseconds`);
                return;
            }

            if (count === maxCount) {
                clearInterval(id)
                console.log(`Done! Counter reached ${maxCount}`)
            }
            count++;
        }, timer)

    });

    const cancel = ()=>{
        canceled = true
    }

    return { promise, cancel};
}

// Usage:
const { promise, cancel } = createCounterPromise(10, 15000);

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });

    setTimeout(cancel, 2000);

// OUTPUT:
// Counter 1
// Counter 2
// Counter 3
// Counter 4
// Counter 5
// Counter 6
// Counter 7
// Counter 8
// Counter 9
// Counter 10
// Done ! Counter reached 10

// Cancel after 2 seconds
 //This should cancel the operation after 2 seconds with message "Operation canceled after 2 seconds"