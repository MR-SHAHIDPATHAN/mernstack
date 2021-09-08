 const mongoose  = require("mongoose");

//connect database
const DB=process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log("connection successfull");
}).catch(()=>{
    console.log("no connection");
})



