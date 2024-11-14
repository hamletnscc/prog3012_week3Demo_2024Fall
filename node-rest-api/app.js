/*
Name: Hamlet Lin
Date: 11/13/2024
Description: Create simple rest api using node and express
*/

//create a reference to the express module
const express = require('express');
//create an express app object using the express constructor
const app = express();
//indicate what format we will be using for this web service
app.use(express.json());

//declare the port to be listened to and initialize the web service
const PORT = process.env.PORT||3000;
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

//declare the callback function based on the 
//type of request (e.g. GET, POST, PUT, DELETE)
//We are using GET in this one, thus app.get
app.get("/status", (request, response) => {
    //declare the response to be sent
    //in jsons format
    const status = {
       "Status": "Running"
    };    
    //sending this back to the client
    response.send(status);
 });

 function statusCallBack(request, response)
 {
   const status = {
       "Status": "Running"
    };    
    //sending this back to the client
    response.send(status);
 } 
