const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        console.log('first!');
        res.write(`
            <h1>Welcome!</h1>
            <p>Here's our about page:<a href="/about">About Page</a></p>
        `)
        res.end('Welcome to our home page.');
    }else if(req.url === '/about'){
        console.log('second!');
        res.end('Here is our short history.')
    }else{
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find it.</p>
    <a href = "/">back home</a>
    `);
    // res.write();
    // res.end();
    }
})

server.listen(5000);