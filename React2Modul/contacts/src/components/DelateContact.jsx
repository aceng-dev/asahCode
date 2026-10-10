import React from "react";

function DelateContact({ delateContact, id }) {
    return (
        <div className="delate__Contact">
            <button onClick={() => delateContact(id)}>X</button>
        </div>
    )
}
export default DelateContact;