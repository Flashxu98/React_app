import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {login} from "../service/APIServices";
import {setToken} from "../service/StorageServices";
import "../styles/loggin.css";


class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    render() {
        const {auth} = this.props;

        if (auth) {
            return <Redirect to="/"/>;
        }

        const {email, password} = this.state;

        return (
            <div id="login">
                <h1 id='title_login'> Login </h1>
                <form onSubmit={this._handleOnSubmit.bind(this)} >
                    <input placeholder="Username" required="" id="username"  onChange={this._handleChangeInput.bind(this, 'email')} value={email} name="email"
                           type="text"/>
                    <input placeholder="Password" required=""  id="password"  onChange={this._handleChangeInput.bind(this, 'password')} value={password} name="password"
                           type="password"/>
                    <button id="login-btn">Submit</button>
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
       // debugger
        //console.log('erro');
        e.preventDefault();
        const {email, password} = this.state;
        login({email, password})
            .then(response => {
                const {success, data} = response;
                if (success) {
                    const {accessToken} = data;
                    this.props.onAuth(true);
                    setToken(accessToken);
                }
                else{
                    alert("Tài khoản hoặc mật khẩu sai !");
                }
            });

    }

    componentDidMount() {

    }
}

export default Login;