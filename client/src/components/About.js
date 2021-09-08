import React,{useEffect, useState} from 'react';
import shahidimage from "../images/shahid.png";
import abooutpic from "../images/profile.png";
import {useHistory} from "react-router-dom";

import Button from '@material-ui/core/Button';




const About = () => {
  const history = useHistory();
  const [userData , setUserData] = useState({});
  const callAboutPage = async ()=>{

    try {
      
      const res = await fetch('/about',{
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          credentials :"include"
      });

       const data = await res.json();
       setUserData(data);
      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }
      
    } catch (error) {
      history.push('/login')

    }
  }

useEffect(() => {
    callAboutPage();
},[]);

  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4 mt-3">
              <div className="profile-img">
                <img src={userData.name === "shahid pathan" ?shahidimage : abooutpic } alt="profileImages" />
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="profile-head"> 
              <h5>{ userData.name }</h5>
              <h6>Web Devloper</h6>
              <p className="profile-rating mt-3 mb-5">RANKING : <span>"1/10"</span></p>

                

              </div>
            </div>
            <div className="col-md-2 mt-3">
              {/* <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" /> */}
              <Button variant="contained">Edit Profile</Button>
            </div>
            

          </div>

          {/* second bottom section  */}
          <div className="row">
            {/* left side url section */}
            <div className="col-md-4 mt-3">
              <div className="profile-work ">
                <p>WORK LINK</p>
                <a href="https://www.google.com" rel="noreferrer" className="link-style" target="_blank">MongoDB</a><br />
                <a href="https://www.google.com" rel="noreferrer" target="_blank">ExpressJs</a><br />
                <a href="https://www.google.com" rel="noreferrer" target="_blank">ReactJs</a><br />
                <a href="https://www.google.com" rel="noreferrer" target="_blank">NodeJs</a><br />
                <a href="https://www.google.com" rel="noreferrer" target="_blank">MERN STACK</a><br />
                

              </div>

            </div>


            {/* right side tab toggle data */}
            <div className="col-md-8 pl-5 about-info mt-3">
              <div className="tab-content profile-tab" id="myTacContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                 <div className="row">
                       <div className="col-md-6 mt-3">
                    <label> User ID</label>

                       </div>
                    <div className="col-md-6 mt-3  tab-blue-color">
                        <p>{userData._id}</p>

                   </div>
                  </div>

                 <div className="row mt-3">
                       <div className="col-md-6">
                    <label> Name</label>

                       </div>
                    <div className="col-md-6 tab-blue-color">
                        <p>{userData.name}</p>

                   </div>
                  </div>
                 <div className="row mt-3">
                       <div className="col-md-6">
                    <label> Email</label>

                       </div>
                    <div className="col-md-6 tab-blue-color">
                        <p>{userData.email}</p>

                   </div>
                  </div>
                 <div className="row mt-3">
                       <div className="col-md-6">
                    <label> Phone</label>

                       </div>
                    <div className="col-md-6 tab-blue-color">
                        <p>{userData.phone}</p>

                   </div>
                  </div>
                 <div className="row mt-3">
                       <div className="col-md-6">
                    <label> Profession</label>

                       </div>
                    <div className="col-md-6 tab-blue-color">
                        <p>{userData.work}</p>

                   </div>
                  </div> 
                
               

                </div>
                
               


               

              </div> 

            </div>
          </div>


        </form>

      </div>



    </>
  )
}

export default About
