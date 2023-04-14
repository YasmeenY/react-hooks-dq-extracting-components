import React from "react";

function Contacts(props){
    return(
        <li className="contact">
            <div className="icon">{props.name[0]}</div>
            {props.name}
        </li>
    )
}

export default Contacts;