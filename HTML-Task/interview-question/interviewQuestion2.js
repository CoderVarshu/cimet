async function sequentialDelayedCounting(limit = 5) {

    try {

        var random = 1000;
        function randomizator(a, b) {
            return Math.floor(Math.random() * b) + a;
        }
        let count = 1
        let id = setInterval(() => {
            if (count >= limit) {
                clearInterval(id)
               return console.log("Completed!")
            }
            
            console.log(`waiting ${randomizator(1000, 4000)}ms for logging ${count}`)
            console.log(`${count}`)
            count ++
        }, randomizator(1000, 4000))


    } catch (error) { }
}

sequentialDelayedCounting(6);