import React from "react";
import HeaderTheme from "./HeaderTheme";
import BtnTheme from "./BtnTheme";
class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            color : 'white'
        }
        this.onBtnEvHandler = this.onBtnEvHandler.bind(this)
    }

    onBtnEvHandler(){
        this.setState((prevState) => ({
            color : prevState.color === 'white'? 'black' : 'white'
        }))
    }
 

    render(){
        return(
        <div style={{backgroundColor : this.state.color}}>
            <HeaderTheme />
            <BtnTheme onChangeColor={this.onBtnEvHandler}/>
        </div>
        )
    }
}
export default App