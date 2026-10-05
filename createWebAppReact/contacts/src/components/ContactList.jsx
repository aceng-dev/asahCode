import React from "react";
import ContactItem from "./ContactItem";

function ContactList({contact}) {
return (
    <div className="contact__List">
        {contact.map((item, index) => (
                <ContactItem
                    key={index} 
                    {...item}/>
            ))} 
    </div>
)
}
export default ContactList;