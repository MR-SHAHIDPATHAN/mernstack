import React,{useState} from 'react';
import signup from "../images/login.jpg";
import {NavLink ,useHistory} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Button from '@material-ui/core/Button';
import WorkIcon from '@material-ui/icons/Work';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import EmailIcon from '@material-ui/icons/Email';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import LockIcon from '@material-ui/icons/Lock';






const Signup = () => {
  const History = useHistory();
 const [user,setUser]= useState({
   name:"", email:"", phone:"", work:"", password:"", cpassword:""});




 let name , value;
const handleInput = (e)=>{
  name=e.target.name;
  value=e.target.value;
  setUser({...user,[name]:value})
  console.log(e);

}

const DataPost = async (e)=>{
  e.preventDefault();
const {name , email , phone , work , password , cpassword}=user;
         const res =await fetch("/register" ,{
           method:"POST",
           headers:{
             "Content-Type":"application/json" },
             body:JSON.stringify({
              name,email, phone, work, password, cpassword
             })

         });

         const data = res.json();
         if(data.status === 422 || !data ){
           window.alert("inValide Registration");
           console.log("inValide Registration");

         }else{
          window.alert("Successfull Registration");
          console.log("Successfull Registration");

          History.push("/login");

         }

}

  return (
<>
<section className='signup'>
    <div className="container  ml-5 mx-5">
      <div className="signup-content">
      <div className="signup-form">
        {/* <h2 className="form-title">Sign up</h2> */}
        <form method="POST" className="register-form" id="register-form">
        <h2 className="form-title">Sign up</h2>



{/* name input */}
          <div className="form-group">
              <div className="testing">
            <label htmlFor="name">
            <AccountBoxIcon/>
            </label>
            <input 
            type="text" 
            name="name" 
            id="name" 
            value={user.name}
            onChange={handleInput} 
            autoComplete="none" 
            placeholder="Your Name"
            />
            </div>
          </div>


 {/* email input  */}
          <div className="form-group">
              <div className="testing" >
            <label htmlFor="email">
            <EmailIcon/>
            </label>
            <input 
            type="text" 
            name="email" 
            id="email" 
            value={user.email}
            onChange={handleInput} 
            autoComplete="none" 
            placeholder="Enter your email"
            />
            </div>

          </div>

   {/* phone  */}
          <div className="form-group">
            <div className="testing">
            <label htmlFor="phone">
            <PhoneInTalkIcon/>
            </label>
            <input 
            type="number" 
            name="phone" 
            id="phone" 
            value={user.phone}
            onChange={handleInput} 
            autoComplete="none" 
            placeholder="Mobile NO"
            />
            </div>

          </div>

          
    {/* work   */}
          <div className="form-group">
            <div className="testing">
            <label htmlFor="work">
            {/* <i className="zmdi zmdi-slideshow material-icons-name"></i> */}
            <WorkIcon/>
            </label>
            <input 
            type="text" 
            name="work" 
            id="work" 
            value={user.work}
            onChange={handleInput} 
            autoComplete="off" 
            placeholder="Your Profession"
            />
              </div>
          </div>

 {/* password */}
          <div className="form-group">
          <div className="testing">
            <label htmlFor="password">
            <LockIcon/>
            </label>
            <input 
            type="password" 
            name="password" 
            id="password" 
            value={user.password}
            onChange={handleInput} 
            autoComplete="off" 
            placeholder="Enter your password"
            />
            </div>
          </div>

  {/* cpassword */}
          <div className="form-group">
             <div className="testing">
            <label htmlFor="cpassword">
            <LockIcon/>
            </label>
            <input 
            type="password" 
            name="cpassword" 
            id="cpassword" 
            value={user.cpassword}
            onChange={handleInput} 
            autoComplete="off" 
            placeholder="Enter your confirm password"
            />
            </div>
          </div>

          <div className="form-group form-button">
           <Button variant="contained" color="primary" 
               type="submit" 
              name="signup" 
              id="signup" 
              value="register"
              onClick={DataPost}>
              Register
</Button>



          </div>


        </form>
        </div>

            <div className="signup-image">
              <figure>
                <img src={signup} alt="signup images"  />
              </figure>
              <NavLink to="/login" className="signup-image-link">I am already register</NavLink>
            </div>
      </div>

<div/>
      </div>


     


</section>

</>


  )
}

export default Signup;
