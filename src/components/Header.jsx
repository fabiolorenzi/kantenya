import React from "react";
import {NavLink} from "react-router-dom";
import Burger from "./Burger.jsx";

function Header() {
    return (
        <header>
            <Burger />
            <nav>
                <NavLink exact to="/kantenya" activeClassName="sel" className="headli"><li>HOME</li></NavLink>
                <NavLink to="/products" activeClassName="sel" className="headli"><li>PRODUCTS</li></NavLink>
                <NavLink to="/readymeals" activeClassName="sel" className="headli"><li>READY MEALS</li></NavLink>
                <NavLink to="/blog" activeClassName="sel" className="headli"><li>BLOG</li></NavLink>
                <NavLink to="/aboutus" activeClassName="sel" className="headli"><li>ABOUT US</li></NavLink>
                <NavLink to="/contacts" activeClassName ="sel" className="headli"><li>CONTACTS</li></NavLink>
            </nav>
        </header>
    );
};

export default Header;