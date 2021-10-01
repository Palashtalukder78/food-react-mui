import logo from '../../images/logo.png'
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div id="nav">
            <div>
                <img className="logo" src={logo} alt="" />
            </div>
            <div>
                <NavLink className="navlink" to="/home" activeClassName="selected" activeStyle={{
                    fontWeight: "bold",
                    color: "white"
                }}>Home</NavLink>
                <NavLink className="navlink" to="/shop" activeClassName="selected" activeStyle={{
                    fontWeight: "bold",
                    color: "white"
                }}>Shop</NavLink>
            </div>
        </div>
    );
};

export default Header;