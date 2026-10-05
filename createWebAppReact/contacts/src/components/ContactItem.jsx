import React from "react";
import ContactProfile from "./ContactProfile";
import ContactBody from "./ContactBody";
function ContactItem({ nama, imgUrl, username }) {
    return (
        <div className="contact__Item">
          <ContactProfile nama={nama} imgUrl={imgUrl} />
          <ContactBody nama={nama} username={username} />
        </div>
    )
}
export default ContactItem;