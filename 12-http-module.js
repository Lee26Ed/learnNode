// HTTP module

const http = require('http')


// requires a callback function
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage.')
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you were looking for</p>
    <a href="/">Back Home</a>
    `)
})

// server needs to listen to a port.
server.listen(5000)