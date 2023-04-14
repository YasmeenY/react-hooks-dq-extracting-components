import React from "react";
import Message from "./Message";
import { messages} from "../data";
import Form from "./Form";

function MessageList(){
    const messageListings = messages.map(message => {
        return(
            <Message 
                key={message.id}
                name={message.name}
                type={message.type}
                content={message.content}
            />
        )
    })
    return(
        <main>
            <h2>Messages</h2>
            <section className="messages">
                <ul>
                    {messageListings}
                </ul>
            </section>
            <Form/>
        </main>
    )
}

export default MessageList;