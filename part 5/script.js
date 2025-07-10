// FORM HANDLING AND WORKING WITH FORMS
// HANDLE BACKEND PROCESS OF FORMS AND MAKING SURE THE DATA COMING FROM ANY FRONTEND LIBRARY YA FIR FRAMEWORK
// YA FIR TEMPLATING ENGINES WE STILL HANDLE IT AT THE BACKEND 

// SESSION COOKIE  -> HELPS IN REDUCING MULTIPLE LOGGIN TO SERVER IF YOU ARE DISCONNECTED MULTIPLE TIMES
// HUM LOG KUCH BHI DATA FRONTEND PAR BROWSER PAR RAKH SAKTE HAI
// AND JAB BHI AAP KUCH BHI REQUEST BACKEND PAR KAROGE WO DATA FRONTEND PAR SAVED DATA AUTOMATICALLY BACKEND PAR CHALA JAYEGA

// YOU ASKED FACEBOOK SERVERS TO GIVE A PHOTO , FB ASKS WHO ARE YOU , THEN YOU TELL I AM DAVID(LOGIN CREDS) THEN HE GIVE YOU THE PHOTO
// YOU AGAIN LIKED A PHOTO, FB ASKS WHO R U , NOW YOU AGAIN SAY I AM DAVID(LOGIN CREDS) SO ITS FRUSTATING 

// BUT SAY FIRST TIME YOU LOGGED IN AND THEN TELL THE SERVER AN ID SAY ABCD11 EVERYTIME YOU ASKS SOMETHING
// SO IT GOES LIKE SHOW ME A PHOTO .. ABCD11 THEN HE SAYS OK ABCD11 IS DAVID HERE IS THE PHOTO
// NOW YOU LIKED THAT PHOTO.. ABCD11 , THEN SERVER SEES OK DAVID LIKED THE PHOTO BUT AS SOON AS YOU WILL NOT SAY ABCD11
// IT WILL AGAIN ASK WHO ARE YOU 

// SESSION --> LOGIN KARNE SE LOG OUT KARNE TAK EK SESSION KEHLATA HAI

const express = require('express');
const app = express();

app.use(express.json());
// What it does: Parses incoming requests with JSON payloads.

// Used when: The client (like a frontend or Postman) sends data as application/json.


app.use(express.urlencoded({extended: true}));

// express.urlencoded({ extended: true })
// What it does: Parses incoming requests with URL-encoded payloads (like HTML form data).

// Used when: Data is sent using a form with application/x-www-form-urlencoded.

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