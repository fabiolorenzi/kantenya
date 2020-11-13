import React from "react";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer>
            <Link to="/terms-conditions" id="footerLink"><h2>Terms &amp; Conditions</h2></Link>
        </footer>
    );
};

export default Footer;