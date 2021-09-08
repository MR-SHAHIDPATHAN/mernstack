import React,{createContext ,useReducer} from 'react';
import {Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import Errorpage from './components/Errorpage';
import "./App.css"
import {initialState,reducer} from "../src/reducer/UseReducer";





  // context api
  export const UserContext = createContext();

const Routing =()=>{
  return(
    <Switch>
 <Route  exact path="/" component= {Home} />

 <Route  exact path="/about" component={About}/>

 <Route  exact path="/contact" component={Contact}/>

 <Route  exact path="/login" component={Login}/>

 <Route  exact path="/signup" component={Signup}/>

 <Route  exact path="/logout" component={Logout}/>

 <Route component={Errorpage} />
 </Switch>
  )
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
   <>
   

<UserContext.Provider value={{state , dispatch}}>
   <Navbar/>
   <Routing/>
   </UserContext.Provider>
   
  

   

{/* 
   <Home/>
   <About/> */}

   
   </>


  )
}

export default App;

