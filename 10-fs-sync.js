// file system module FS

const {readFileSync, writeFileSync} = require('fs')


console.log('start')
// file name and encoding
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)


// file name and value to pass, flag with a to append
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`
    )

console.log('done with this task')
console.log('starting the next one')