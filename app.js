
const dotenv = require ("dotenv");

const express = require("express");
const CookieParser = require('cookie-parser');
const app = express();
app.use(CookieParser());

dotenv.config({path:'./config.env'})

require("./DB/conn");
app.use(express.json());
// const User = require("./model/userSchema");
const PORT = process.env.PORT || 5000;


// routing here 
app.use(require("./Router/auth"))


//

    // app.get("/", (req, res)=>{
    // res.send("welcome to homepage again")
    
    // });
    
    // app.get("/about", (req,res )=>{
    //    res.send("welcome to about page")
    // })
    
    // app.get("/contact", (req, res)=>{
    //     res.send("welcome to contact page")
    
    // })
    
    
    // app.get("/signin",(req,res)=>{
    //     res.send("welcome to login page")
    
    // })
    
    // app.get("/signup", (req, res)=>
    // res.send("welcome to  register page")
    // )



// heroku steps 

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));

}



app.listen(PORT, ()=>{
    console.log(`server start port no ${PORT}`);
})


