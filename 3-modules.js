// MODULES - encapsulated code


// destructure the object 
// const { john, peter } = require('./4-names') 

// or use property names ( names.john, names.peter) 
const names = require('./4-names')
const sayHi = require('./5-utils')

const data = require('./6-alternativeExport')

require('./7-mind-grenade')

// console.log(data)

// console.log(names)
// console.log(sayHi)

// sayHi("Susan")
// sayHi(names.john)
// sayHi(names.peter)



// function types of definitions

// const foo = (parameter) => {function body}

// (parameter) => {function body}

// function name (parameter) { function body }