// INTRODUCTION TO EXPRESS JS
// MERN  

// DEFINATION OF EXPRESS WHY IT IS USED 
// express js ek npm packagae hai
// framwork
//manages everything from receiving the request and giving back the response


// Agar tumne youtube ki video chalai tumne ek request send kari to google's youtube then as soon 
// as the request is received by google the Express work is started

// setting up a basic express application

const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send("hello Express");
})
app.get('/profile', function(req,res, next){
    return next(new Error("Not Implemented"))
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send("Something Broke")
})

app.listen(3000)
