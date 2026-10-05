import React from "react";

function ContactProfile({ nama, imgUrl }) {
    return (
        <div className="img__Profile">
            <img src={imgUrl} alt={nama} />
        </div>
    )
}
export default ContactProfile;