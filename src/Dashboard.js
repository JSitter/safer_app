import React from 'react';
import UserForm from './UserForm.js';

export default function Dashboard(props){  
    const messages = props.messages.map(message=>message)

    const messageList = messages.map((message)=><li>{message.message}</li>);
    return (
        <div>
            <ul>
            {messageList}
            </ul> 
            <UserForm setUserFormVis={props.setUserFormVis} userFormVis={props.userFormVis}/>
        </div>
      )
}