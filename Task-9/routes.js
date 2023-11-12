const fs = require('fs');

const requestHandler= (req,res)=>{
    const url = req.url;
    const method = req.method;

  if (url === '/') {
    fs.readFile("message.txt",{encoding:'utf-8'}, (err,data)=>{
        if(err){
            console.log(err);
        }
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write(`<body>${data}</body>`)
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
        
    }); 
  }else if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => { body.push(chunk); console.log(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        if(err){
          console.log(err);
        }
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  };
// module.exports={
//     handler:requestHandler,
//     someText:"Some hard text code"
// }

 module.exports=requestHandler
// module.exports.someText="Some hard text code";

// exports.handler=requestHandler;
// exports.someText="Some hard text code";
