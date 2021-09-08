import React ,{useState,useContext} from 'react';
import signin from "../images/signup.jpg";
import { NavLink,useHistory } from 'react-router-dom';
import {UserContext}from "../App";
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const Login = () => {

 const {state,dispatch} = useContext(UserContext)
 


const history = useHistory();
const [email,setEmail] = useState("");
const [password,setPassword]= useState("");

const LoginUser =  async (e)=>{
  e.preventDefault();
  
  const res = await fetch("/signin", {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email,password
      
    })
  });
  const data = res.json();
  if(data.status === 400){
    window.alert("invalid details")
  }else{
    dispatch({type:'USER',payload:true})
    window.alert("login successfull")
    history.push("/");

  }

}


  return (
    <>
      
<section className='sign-in'>
    <div className="container  ml-5 mx-5">
      <div className="signin-content">

      
      <div className="signin-image">
              <figure>
                <img src={signin} alt="signin images"  />
              </figure>
              <NavLink to="/Signup" className="signup-image-link"> Create an Account </NavLink>
            </div>

      <div className="signup-form">
        <form method="POST" className="register-form" id="register-form">
        <h2 className="form-title">Sign In</h2>
 {/* email input  */}
          <div className="form-group">
              <div className="testing" >
            <label htmlFor="email">
            <i className="zmdi zmdi-email material-icons-name"></i>
            </label>
            <input 
            type="text" 
            name="email" 
            id="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            autoComplete="none" 
             placeholder="Enter your email"
            />
            </div>
          </div>

 {/* password */}
          <div className="form-group">
          <div className="testing">
            <label htmlFor="password">
            <i className="zmdi zmdi-lock material-icons-name"></i>
            </label>
            <input 
            type="password" 
            name="password" 
            id="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            autoComplete="off" 
            placeholder="Enter your password"
            />
            </div>
          </div>

           <div className="form-group form-button mt-3">
            {/* <input type="submit" name="signin" id="signin" className="form-submit"
            onClick={LoginUser}
            value="Log In" /> */}
            <Button variant="contained" color="primary" className="loginbutton" type="submit" name="signin" id="signin" 
            onClick={LoginUser}
            value="Log In" > login <span className="loginArrowbtn"> <ExitToAppIcon/> </span></Button>

          </div>
        </form>
        </div>
      </div>

<div/>
      </div>
</section>

    </>
  );
}

export default Login;
