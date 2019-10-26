import React from 'react';
import './styles.css';
import './Signup.css';

function Signup(){
    
    return (
        <div className="wrapper">
            <div className="close-wrapper"><i className="fas fa-times close-bttn" ></i></div>
            <form>
                <h2>Register for an Account</h2>
                <label>Username</label><input type="text"></input>
                <label>Password</label><input type="text"></input>
                <label>Password</label><input type="text"></input>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Signup;