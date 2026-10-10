import React from "react";
import ContactProfile from "./ContactProfile";
import ContactBody from "./ContactBody";
import DelateContact from "./DelateContact";

function ContactItem({ nama, imgUrl, username ,delateContact, id}) {
    return (
        <div className="contact__Item">
          <ContactProfile nama={nama} imgUrl={imgUrl} />
          <ContactBody nama={nama} username={username} />
            <DelateContact delateContact={delateContact} id={id}/>

        </div>
    )
}
export default ContactItem;