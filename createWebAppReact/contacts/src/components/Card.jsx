import React from "react";
import ContactList from "./ContactList";
import contact from "../utils/data.js";

function Card() {
  const getContact = contact();
  return (
    <div className="card__Container">
      <h1>Daftar Kontak</h1>
      <ContactList contact={getContact} />
    </div>
  );
}
export default Card;
