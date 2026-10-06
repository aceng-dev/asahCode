import React from "react";
import ContactItem from "./ContactItem";

function ContactList({contacts, delateContact}) {
return (
    <div className="contact__List">
        {contacts.map((item, index) => (
                <ContactItem
                    key={index} 
                    {...item} 
                    id={item.id}
                    delateContact={delateContact}
                    />

            ))} 
    </div>
)
}
export default ContactList;