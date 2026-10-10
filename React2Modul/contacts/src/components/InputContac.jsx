import React from "react";
class InputContac extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: "",
            username: ""
        };
        this.onNameChangeEv = this.onNameChangeEv.bind(this);
        this.onUsernameChangeEv = this.onUsernameChangeEv.bind(this);
        this.onSubmitEv = this.onSubmitEv.bind(this);
    }
    onNameChangeEv = (event) => {
        this.setState({ nama: event.target.value });
    }
    onUsernameChangeEv = (event) => {
        this.setState({ username: event.target.value });
    }
    onSubmitEv = (event) => {
        event.preventDefault();
        this.props.addContactHandler(this.state);
    }
    render() {
        return(
            <div className="input__Contact">
                <form className="contact__Input" onSubmit={this.onSubmitEv}>
                    <input type="text" placeholder="Nama" id="nama" value={this.state.nama} onChange={this.onNameChangeEv} />
                    <input type="text" placeholder="Username" id="username" value={this.state.username} onChange={this.onUsernameChangeEv} />
                    <button type="submit">Add Contact</button>
                </form>
            </div>
        )
}
}
export default InputContac;