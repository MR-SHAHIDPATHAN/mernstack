import React,{useEffect , useState}from 'react';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import TextField from '@material-ui/core/TextField';

const Contact = () => {

  const [userData , setUserData] = useState({name:"",email:"",phone:"",message:""});

  const userContact = async ()=>{

    try {
      
      const res = await fetch('/getdata',{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          },
      });

       const data = await res.json();
       setUserData({...userData ,name:data.name, email:data.email,phone:data.phone});

      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }
      
    } catch (error) {
     

    }
  }

useEffect(() => {
    userContact();
},[]);


// we are storing data in states

const handleInputs = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData , [name]:value});


}


//sending the backend 

const contactForm =  async (e)=>{
  e.preventDefault();

  const {name , email , phone , message}= userData;
   const res = await fetch('/contact',{
     method:"POST",
     headers:{
       "Content-Type":"application/json"
     },
     body:JSON.stringify({
      name , email , phone , message

     })

   });


const data = await res.json();
if(!data){
  console.log("message not send conact page");
}else{
   window.alert("message send");
  setUserData({...userData ,message:""});
}


}

  return (
    <>
    
    <div className="contact_info mt-5">
      <div className="container-fluid">
        <div className="row">
        <div className="col-lg-10 mx-auto d-flex justify-content-between ">
          {/* phone number */}
          <div className="contact-info-item d-flex justify-content-start  align-items-center ">
            {/* <i class="zmdi zmdi-phone material-icons-name contact_icon phone-icon-cantact "></i> */}
            <PhoneInTalkIcon/>
              <div className="contact-info-contect">
                  <div className="contact-info-title">
                      Phone
                  </div>
                  <div className="contact-info-text">
                      91+ 111 222 333 444 
                  </div>
              </div>
          </div>

          {/* emaial number */}
          <div className="contact-info-item d-flex justify-content-start align-items-center ">
            {/* <i class="zmdi zmdi-email material-icons-name contact_icon email-icon-cantact"></i> */}
            <EmailIcon/>
              <div className="contact-info-contect">
                  <div className="contact-info-title">
                      Email
                  </div>
                  <div className="contact-info-text">
                      shahidpathan0407@gmail.com 
                  </div>
              </div>
          </div>
          {/* adress number */}
          <div className="contact-info-item d-flex justify-content-start align-items-center ">
            {/* <i class="zmdi zmdi-email material-icons-name contact_icon"></i> */}
            <PersonPinCircleIcon/>
              <div className="contact-info-contect">
                  <div className="contact-info-title">
                      Address
                  </div>
                  <div className="contact-info-text">
                       karad ,MH , India
                  </div>
              </div>
          </div>

        </div>

        </div>
      </div>


    </div>

    {/* conact us form */}

      <div className="contact_form">
        <div className="container mt-4">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                  <div className="contact_form_container py-5">
                     <div className="contact_form_title mb-2">
                       Get In Touch</div>
                        <form method="POST" id="contact_form">  
                          <div className="contact_form_name d-flex justify-content-between align-item-between">
                           
                            {/* <input type="text" id="contact_form_name" 
                              className="contact_form_name input_field"
                              value={userData.name}
                              name="name"
                              onChange={handleInputs}
                              placeholder="Your name" required="true" /> */}
                              <TextField
                              id="outlined-password-input"
                              label="Text"
                              // className="contact_form_name input_field"
                              type="text"
                              name="name"
                              onChange={handleInputs}
                              value={userData.name}
                              placeholder="Enter Your Name"
                              autoComplete="current-password"
                              variant="outlined"
                               />


                              {/* <input type="email" id="contact_form_email" 
                              className="contact_form_email input_field"
                              value={userData.email}
                              name="email"
                              onChange={handleInputs}
                              placeholder="Your email" required="true" /> */}

                              <TextField
                              id="outlined-password-input"
                              label="Enter email"
                              className="contact_form_email input_field"
                              type="email"
                              name="email"
                              onChange={handleInputs}
                              value={userData.email}
                              placeholder="Enter Your Email"
                              autoComplete="current-password"
                              variant="outlined"
                               />

                              {/* <input type="number" id="contact_form_phone" 
                              className="contact_form_phone input_field"
                              value={userData.phone}
                              name="phone"
                              onChange={handleInputs}
                              placeholder="Phone Number" required="true" /> */}

                              <TextField
                              id="outlined-password-input"
                              label="Enter Phone NO"
                              className="contact_form_phone input_field"
                              type="number"
                              name="phone"
                              onChange={handleInputs}
                              value={userData.phone}
                              placeholder="Enter Your Phone No"
                              autoComplete="current-password"
                              variant="outlined"
                               />

                          </div>

                              <div className="contact_form_text mt-5">
                                <textarea className="text_field contact_form_message" 
                                placeholder="message"
                                value={userData.message}
                                name="message"
                                onChange={handleInputs}
                                 cols="30" rows="6">

                                 </textarea>
                              </div>

                                      <div className="contact_form_button mt-2">
                                      <Button type="submit"
                                       variant="contained" 
                                       onClick={contactForm}
                                       color="secondary">Message</Button>
                                       
                                      </div>
                                     
                        </form>

                  </div>
              </div>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default Contact;