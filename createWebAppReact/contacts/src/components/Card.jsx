import React from "react";
import ContactList from "./ContactList";
import contact from "../utils/data.js";
import InputContac from "./InputContac.jsx";
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: contact(),
        };
        this.onDelateContact = this.onDelateContact.bind(this);
        this.onAddContact = this.onAddContact.bind(this);
    }
    onDelateContact = (id) => {
        const newContact = this.state.contacts.filter((contact) => contact.id !== id);
        this.setState({ contacts: newContact });
    }
    onAddContact = ({nama, username}) => {
        this.setState((prevState) => ({
            contacts: [...prevState.contacts, {
                id: +new Date(),
                nama,
                username,
                imgUrl: "/images/default.jpg"
            }]
        }));
    }
    render() {
        return (
            <div className="card__Container">
                <h1>Contact List</h1>
                <InputContac addContactHandler={this.onAddContact} />
                <ContactList contacts={this.state.contacts} delateContact={this.onDelateContact} />
                
            </div>
        )
    }
      }
export default Card;
