import React, {Component} from "react";
import {register} from "../service/APIServices";
import {Redirect} from "react-router-dom";
import "../styles/loggin.css";
class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        success: false,
    };

    render() {
        const {name, email, password, success} = this.state;

        if (success) {
            return <Redirect to="/login"/>;
        }

        return (
            <div id="login">
                <h1 id='title_login'>Register Page</h1>
                <form onSubmit={this._handleOnSubmit.bind(this)}>
                    <input  onChange={this._handleChangeInput.bind(this, 'name')}
                           value={name} placeholder="Your name"
                           type="text"/>
                    <input id="username"
                        onChange={this._handleChangeInput.bind(this, 'email')}
                        value={email} placeholder="Your email" type="email"/>
                    <input id="password"
                        onChange={this._handleChangeInput.bind(this, 'password')}
                        value={password} placeholder="Your password" type="password"/>

                    <button id="login-btn">Register</button>
                </form>
            </div>
        );
    }

    _handleChangeInput(field, e) {
        const {value} = e.target;

        this.setState({
            [field]: value
        });
    }

    _handleOnSubmit(e) {
        e.preventDefault();
        const {name, email, password} = this.state;

        register({name, email, password})
            .then(response => {
                const {success, message} = response;

                if (success) {
                    this.setState({
                        success: true
                    });
                } else {
                    alert(message);
                }
            });

    }
}


export default Register;