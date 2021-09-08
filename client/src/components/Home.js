import React,{useState,useEffect} from 'react';

const Home = () => {
  const [userName , setUserName] = useState('');
  const [show , setShow]= useState(false);

  const userHomePage = async ()=>{

    try {
      
      const res = await fetch('/getdata',{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          },
      });

       const data = await res.json();
       setUserName(data.name);
       setShow(true);
      
    } catch (error) {
     

    }
  }

useEffect(() => {
    userHomePage();
},[]);

  return (
    <>

        <div className="home-page">

          <div className="home-div">
              <p id="home-para"> Welcome</p>
              <h1 className="userName">{userName}</h1>
              <h3 id="home-header"> { show ? 'Happy, to see you back':  'we are the MERN Developer'}</h3>

          </div>

        </div>

    </>
  )
}

export default Home
