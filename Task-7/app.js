const http=require('http');

const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>main page</title></head>')
        res.write('<body>');
        res.write('<h1>Welcome to Main page</h1>');
        res.write('<form action="/home" method="post"><a href="/home" >Home</a></form>');
        res.write('<form action="/about" method="post"><a href="/about" >About</a></form>');
        res.write('<form action="/node" method="post"><a href="/node" >Node</a></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/home'){
        res.write('<html>');
        res.write('<head><title>Home</title></head>')
        res.write('<body>');
        res.write('<h1>Welcome to Home page</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();  
    }
    if(url==='/about'){
        res.write('<html>');
        res.write('<head><title>About</title></head>');
        res.write('<body>');
        res.write('<h1>About us page</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/node'){
        res.write('<html>');
        res.write('<head><title>Node </title></head>');
        res.write('<body>');
        res.write('<h1>Node js project</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>No page </title></head>');
        res.write('<body>');
        res.write('<h1>end page</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();
})
server.listen(4000);
