import React, {Component} from "react";
import "../styles/navbar.css";
import {Link} from "react-router-dom";
import {setToken} from "../service/StorageServices";
class NavBar extends Component {
    render() {
        const {auth} = this.props;
        const login = !auth ? <li><Link to="/login">Login</Link></li> : null;
        const register = !auth ? <li><Link to="/register">Register</Link></li> : null;
        const logout = auth ? <li><a onClick={this._handleLogout.bind(this)}>Logout</a></li> : null;
        return (
            <ul className="NavBar">
                <li><Link to="/">Home</Link></li>
                {login}
                {register}
                {logout}
            </ul>
        );
    }

    _handleLogout() {
        this.props.onAuth(false);
        setToken('');
    }
}

export default NavBar;