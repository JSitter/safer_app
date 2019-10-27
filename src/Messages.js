import React from 'react';


export default function Messages(props){  
    const messages = props.messages.map(message=>message)

    const messageList = messages.map((message)=><li>{message.message}</li>);
    return (
        <ul>
          {messageList}
         </ul> 
      )
}