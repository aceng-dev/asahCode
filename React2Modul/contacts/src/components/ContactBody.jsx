import React from "react";
function ContactBody({ nama, username }) {
    return (
        <div className="body__Profile">
            <h3>{nama}</h3>
            <p>{username}</p>
        </div>
    )
}
export default ContactBody;