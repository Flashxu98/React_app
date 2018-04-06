import React, {Component} from "react";
import "./style.css";
//import FormCreate from "./FormCreate";

class Header extends Component {
    state = {
        text: ''
    };

    render() {
        const {text} = this.state;
        return (
            <header>
                <h1>MY TO DO LIST</h1>
                <input type="text" id="input" placeholder="Title ..." value={text} onChange={this._handleOnCreate.bind(this)}/>
                <input type="button" value="Add" id="add" onClick={this.handleOnClick.bind(this)}/>
            </header>
        );
    }

    empty(){
        this.setState({
            text : ''
        });
    }
    _handleOnCreate(e) {
        const {value} = e.target;
        this.setState({
            text : value
        });
    }

    handleOnClick() {
        const {text} = this.state;
        if(text == ''){
            alert("Please write something");
        }
        else{
            //console.log(text);
            this.props.onCreate(text);
            this.empty();
        }

    }

}

export default Header;