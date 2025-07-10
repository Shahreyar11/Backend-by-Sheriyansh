// http = Protocol
//yahi protocol hai ya rule hai jisko follow kare bina aap internet pe 
// na hi kuch bhej sakte ho na hi kuch mangwa sakte ho

const http = require('http');

const server = http.createServer(function(req, res){
    res.end("hello World");
})

server.listen(3000);