import React, {Component} from 'react';
import "../styles/style.css";
import App from "./App";
import {Route, Switch} from "react-router-dom";
import Login from './Loggin'
import Register from './register'
import NavBar from "./Navbar";
import {getAuth} from "../service/StorageServices";
class Wrap extends Component {
    state = {
        auth: false
    };

    componentDidMount() {
        const auth = getAuth()
        this.setState({
            auth
        });
    }

    render() {
        const {auth} = this.state;

        return (
            <div id="app">
                <NavBar onAuth={this._onChangeAuth.bind(this)} auth={auth}/>
                <Switch>
                    <Route exact path="/" component={() => <App auth={auth}/>}/>
                    <Route path="/login"
                           component={() => <Login onAuth={this._onChangeAuth.bind(this)} auth={auth}/>}/>
                    <Route path="/register" component={() => <Register auth={auth}/>}/>
                </Switch>
            </div>
        );
    }
    _onChangeAuth(auth) {
        this.setState({
            auth: auth
        });
    }
}

export default Wrap;
