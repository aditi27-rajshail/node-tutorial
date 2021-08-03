const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage');
    }
    else if (req.url === '/about') {
        res.end('Welcome to our about homepage');
    }
    else res.end(`
     <h1>Oops</h2>
     <p>We cant find the page</p>
     <a href="/">back home</a>
     `)
})
server.listen(3000);