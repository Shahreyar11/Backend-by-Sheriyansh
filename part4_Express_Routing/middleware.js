// ROUTES KE PEHLE LAGTA HAI MIDDLEWARE
// JAB BHI SERVER REQUEST ACCEPT KARTA HAI WAHA SE ROUTE KE BEECH PAHUCHNE TAK AGAR AAP
//  US REQUEST KO BEECH ME ROKTE HO AND KUCH PERORM KARTE HO
// TO YE ELEMENT MIDDLEWARE KEHLATA HAI


const express = require('express');
const app = express();

// KISI BHI ROUTE SE PEHLE YE CHALEGA SO ITS A MIDDLE WARE
//URL PE KUCH BHI LIKHO PEHLE APP.USE() CHALEGA FIR BAKI ROUTES

app.use(function(req, res, next){
    console.log("Middleware chalao");
    next();
}); 

app.get('/', function(req,res){
    res.send("hello Express JS haha");
})


app.listen(3000)

// FRONTEND BACKEND FRONTEND