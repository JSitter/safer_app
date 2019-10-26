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

function App() {

  const [login, setLogin] = useState('guest');
  const [showLogin, updateLogin] = useState('hidden');

  return (
    <div className="App">
      <header className="parallax header-bg" >
        <a href="#" className="header-logo logo-color logo-section">Safer App</a>
      </header>
      <nav className="navbar sticky nav-color">

        <ul className="nav-title">
          <li><a href="http://Some Site.com"><h1 className="nav-site-link">Safer App</h1></a></li>
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
              <a href="https://jaytria.com">About Us</a>
            </li>
          </ul>
          <ul className="nav-right">
            <li><a href="#" onClick={()=>{updateLogin('login')}}>Login</a></li>
          </ul>
          
        </section>
        </nav>
    {login === 'guest'? <Splash/> : <Dashboard/>}
    {showLogin === "login"? <Login visibility={showLogin} setVis={updateLogin} checkLogin={checkLogin}/>: showLogin === 'signup'? <Signup visibility={showLogin} setVis={updateLogin} setLogin={setLogin}/>: ""}
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;