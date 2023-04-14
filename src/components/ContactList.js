import React from "react";
import Contacts from "./Contacts";
import { contacts } from "../data";


function ContactList(){
    const contactListings = contacts.map(contact => {
        return(
            <Contacts 
                key={contact.id}
                name={contact.name}
            />
        )
    })
    return(
        <nav>
            <h2>Contacts</h2>
            <ul className="contacts">
                {contactListings}
            </ul>
        </nav>
    )
}

export default ContactList;