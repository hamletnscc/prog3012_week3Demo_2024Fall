/*
Name: Hamlet Lin
Date: 11/13/2024
Description: Node + HTTP module, create a simple web server using the http module in node.js
*/

//declare a http server object using the http module
const http = require('http');

//create a server object:
http.createServer(function (req, res) {
    let name = req.url;    
    res.write(`<h1>Hello ${name}!</h1>`); //write a response to the client
    res.end(); //end the response
  }).listen(8080); //the server object listens on port 8080