const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));  // Your directory path + public folder , it gives the whole path
app.set('view engine', 'ejs');  // it will render EJS Frontend

app.get("/", function(req,res){
    res.render("index")
})

app.listen(3000, function(){
    console.log("Port 3000 Running Properly")
});

