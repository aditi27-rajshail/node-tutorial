// Asynchronous
const { readFile, writeFile } = require('fs')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log("Error to read the file")
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log("Error to read the file")
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is my result file: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log(result);
            }
        )
    })
})


