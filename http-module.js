const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page');
    }
    // if(req.url === '/about') {
    //     res.end('About page');
    // }
    else {
        res.end(`<h1>Oops!</h1>
             <p>Cannot find the page</p>
             <a href="/">Back home</a>`);
    }
});

server.listen(5000);