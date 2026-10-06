import React from "react";
import ContactList from "./ContactList";
import contact from "../utils/data.js";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: contact(),
        };
        this.onDelateContact = this.onDelateContact.bind(this);
    }
    onDelateContact = (id) => {
        const newContact = this.state.contacts.filter((contact) => contact.id !== id);
        this.setState({ contacts: newContact });
    }

    render() {
        return (
            <div className="card__Container">
                <h1>Contact List</h1>
                <ContactList contacts={this.state.contacts} delateContact={this.onDelateContact} />
            </div>
        )
    }
      }
export default Card;
