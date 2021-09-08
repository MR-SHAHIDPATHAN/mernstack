const jwt = require("jsonwebtoken");
const express= require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require ("../middleware/authenticate");


require("../DB/conn");
const User = require("../model/userSchema");




  
  
  


  
  //async await here  method using 
  router.post("/register", async (req,res)=>{
    
    try {

    // object destruring 
      const {name , email , phone , work , password , cpassword}=req.body; // get data

      if(!name || !email || !phone || !work || !password || !cpassword){ // check the all fields
        return res.status(422).json({error:"please fill all data"})
  
      }


          const userExits =  await User.findOne({email:email}) // email validation in database
        
          if(userExits){
            return res.status(422).json({error:"email is allready exist"});  // agar he to 
          }else if(password != cpassword){   // password validation
            return res.status(404).json({message:"password are not matching"})

          }else{


            const createUser = new User({name , email , phone , work , password , cpassword})// nahi he to 
            //middleWare here hash password >> hash code userShema file ke andar hai  
                 await createUser.save();
                 res.status(201).json({message:"data save sucussfull"});



          }
        
      } catch (error) {
        console.log(error);

      
      }
  
  });
  
  

// login route define 

router.post("/signin", async (req,res)=>{

  try {
    

    const {email , password}= req.body;  // get the data 



    if(!email || !password){
      return res.status(400).json({message:"please fill the data "})  // validation 
    }

    const userLogin = await User.findOne({email:email});  // email he ya nhi database me 

    if(userLogin){
    const isMatch = await bcrypt.compare(password , userLogin.password) //  hash password matching 

      // creating jsontoken userSchemapage par define he 
      const token = await userLogin.generateAuthToken();

      // creating cookies here 
      res.cookie("shahidcookies", token ,{
        expires: new Date(Date.now() + 432000000 ),
        httpOnly:true
      });

      


    if(!isMatch){
       res.status(400).json({messsage:"user login error"})  // aagar nahi he to 

    }else{
      res.json({messsage:"user login suceessfuullyy"})
    }
    }else{
      res.json({messsage:"user login error "})
      
    }

  } catch (error) {
    console.log(error);
    
  }


});

// about us ka page he 
router.get('/about',authenticate, (req, res)=>{
  res.send(req.rootUser);

});


// new page route here for contact us and home  page 
router.get('/getdata', authenticate, (req ,res)=>{
  res.send(req.rootUser);


})


//contact us page create here

router.post("/contact", authenticate, async (req, res)=>{

try {

const { name , email , phone, message } = req.body;

if(!name ||  !email ||  !phone||  !message ){
  return res.json({message :"plese fill the data "});

}
const userContact = await User.findOne({_id:req.userId})
if(userContact){

  const userMessage = await userContact.addMessage(name,email,phone,message)
  // console.log(userMessage);
  await userContact.save();
  res.status(201).json({ message :"user message send"})

}
  
} catch (error) {

  console.log("message not send auth page");


  
}

});


// logout page here
router.get('/logout',(req,res)=>{
  res.clearCookie('shahidcookies',{path:"/"});
res.status(200).send("user logout")

})



  module.exports = router;