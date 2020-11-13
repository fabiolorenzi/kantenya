import React, {useState} from "react";
import {NavLink} from "react-router-dom";

function Burger() {
    let [showMenu, setShowMenu] = useState(false);
    function close() {
        setShowMenu(!showMenu);
    };

    let menuItems =
        <div className="menuItems">
            <ul className="hiddenNav openMenu">
                <NavLink exact to="/kantenya" activeClassName="selB" className="headli hidheadli" onClick={close}><li>HOME</li></NavLink>
                <NavLink to="/products" activeClassName="selB" className="headli hidheadli" onClick={close}><li>PRODUCTS</li></NavLink>
                <NavLink to="/readymeals" activeClassName="selB" className="headli hidheadli" onClick={close}><li>READY MEALS</li></NavLink>
                <NavLink to="/blog" activeClassName="selB" className="headli hidheadli" onClick={close}><li>BLOG</li></NavLink>
                <NavLink to="/aboutus" activeClassName="selB" className="headli hidheadli" onClick={close}><li>ABOUT US</li></NavLink>
                <NavLink to="/contacts" activeClassName ="selB" className="headli hidheadli" onClick={close}><li>CONTACTS</li></NavLink>
            </ul>
        </div>

    let hiddenMenu;

    if (showMenu) {
        hiddenMenu = menuItems;
    } else {
        hiddenMenu = null;
    };

    let burgerDyn = showMenu
        ? ("openBurger")
        : {};

    return (
        <div className="burgerBlock">
            <div id="burgerIcon" onClick={() => setShowMenu (!showMenu)} className={burgerDyn}>
                <div></div>
                <div></div>
                <div id="bottomBurger"></div>
            </div>
            <div className="hidden_menu">
                {hiddenMenu}
            </div>
        </div>
    );
};

export default Burger;




