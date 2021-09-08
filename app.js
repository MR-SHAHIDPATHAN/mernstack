
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





// heroku steps 

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));

}



app.listen(PORT, ()=>{
    console.log(`server start port no ${PORT}`);
})


