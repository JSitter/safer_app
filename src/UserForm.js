import React, { useState } from 'react';


function handleSubmit(props){
    console.log("Submit post requets here")
}


export default function UserForm(props){
    const [visibility, setVisibility] = useState(props.userFormVis)

    return (
        <section className={"panel-overlay " + props.userFormVis}>
            <div className="panel-overlay-content">
            <div className="close-wrapper"><i className="fas fa-times close-bttn" onClick={()=>{props.setUserFormVis("hidden")}} ></i></div>
            
                <form>
                    <label>First Name</label><input type="text"></input>
                    <label>Last Name</label><input type="text"></input>
                    <label>Email</label><input type="text"></input>
                    <label>Street Address</label><input type="text"></input>
                    <label>City</label><input type="text"></input>
                    <label>State</label><input type="text"></input>
                    <label>Zip</label><input type="text"></input>
                    <button>Submit</button>
                </form>
            </div>
        </section>

    )
}