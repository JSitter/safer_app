import React, { useEffect } from 'react';
import './styles.css';
import './Login.css';


function handleLogin(props){

 try{
    props.checkLogin(document.getElementById('user').value, document.getElementById('pass').value)
 }catch{
     alert("Please provide a username and password.")
 }
}

function Login(props){

    return (

        <section className={"panel-overlay " + props.visibility} >
            
            <div className="panel-overlay-content">
            <div className="close-wrapper"><i className="fas fa-times close-bttn" onClick={()=>{props.setVis("hidden")}} ></i></div>
                <form>
                    <label>Username</label><input id="user" type="text"></input>
                    <label>Password</label><input id="pass" type="text"></input>
                    <button onClick={()=>{handleLogin(props)}}>Login</button>
                </form>
            </div>
        </section>
    )
}

export default Login;