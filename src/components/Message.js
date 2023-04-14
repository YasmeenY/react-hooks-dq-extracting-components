import React from "react";


function Message(props){
    return(
        <li className={`message ${props.type}`}>
            <div className="icon">{props.name[0]}</div>
            <span className="content">{props.content}</span>
        </li>
    )
}

export default Message;