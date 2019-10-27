import React, { useState } from 'react';
import './App.css';
import './styles.css';
import Login from './Login.js';
import Splash from './Splash.js';
import Signup from './Signup';
import Footer from './Footer.js';
import Dashboard from './Dashboard.js';
import Map from './Map.js';
require('dotenv').config()

function checkLogin(user, pass, setLogin){
  setLogin("authenticated");
}

function getUserLocation(setLocation){
  console.log("location function")
  console.log(setLocation)
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {

    });
  } else {
    alert("Geolocation not available.")
  }
  
}

function App() {
  const [messages, setMessage] = useState([{'message': "This is a dummy message"}, {'message': "This is another message"}])
  const [login, setLogin] = useState('guest');
  const [showLogin, updateLogin] = useState('hidden');
  const [userFormVis, setUserFormVis] = useState("visible")
  const [location, setLocation] = useState([0, 0])
  console.log("location")
  console.log(setLocation)
  if(location[0] == 0 && location[1] == 0){
    console.log(setLocation)
    getUserLocation(setLocation)
  }
  getUserLocation()
  return (
    <div className="App" onLoad={getUserLocation}>
      <header className="parallax header-bg" >
        <a href="#" className="header-logo logo-color logo-section">Safer App</a>
      </header>
      <nav className="navbar sticky nav-color">

        <ul className="nav-title">
          <li><a href="https://localhost:3000/"><h1 className="nav-site-link">Safer App</h1></a></li>
        </ul>
        
        <section className="nav-section" >
          <ul>
            <li>
              <a href="https://jaytria.com">Be Safer</a>
            </li>
            <li>
              <a href="https://jaytria.com">Get Safer</a>
            </li>
            <li>
              <a href="#" onClick={()=>{setLogin('not_guest')}}>Really login</a>
            </li>
          </ul>
          <ul className="nav-right">
            <li><a href="#" onClick={()=>{updateLogin('login')}}>Login</a></li>
          </ul>
          
        </section>
        </nav>
    {login === 'guest'? <Splash/> : <Dashboard messages={messages} setUserFormVis={setUserFormVis} userFormVis={userFormVis}/>}
    {showLogin === "login"? <Login visibility={showLogin} setVis={updateLogin} checkLogin={checkLogin}/>: showLogin === 'signup'? <Signup visibility={showLogin} setVis={updateLogin} setLogin={setLogin}/>: ""}
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;
