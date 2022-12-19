// file system module FS Async

const {readFile, writeFile} = require('fs')

// async need to provide a callback

console.log('start')
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
             `Async result is: ${first}, ${second}`,
             (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
             })
    })
})
console.log('starting next task')