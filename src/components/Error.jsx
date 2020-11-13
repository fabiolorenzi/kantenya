import React from "react";
import {Link} from "react-router-dom";

import logo from "../img/logo.png";

function Error() {
    return (
        <main className="errorClass">
            <div className="errorBanner">
                <img src={logo} alt="kantenya's logo" />
                <h1>OOOPS!</h1>
                <Link to="/kantenya" className="returnLink" id="errorReturn"><h2>Return to the home</h2></Link>
            </div>
            <div className="errorClass">
                <div className="errorBlock">
                    <h1>Oooops! It seems that the page you are looking for doesn't exist!</h1>
                    <Link to="/kantenya" id="errorBut"><h2>RETURN TO THE HOMEPAGE</h2></Link>
                </div>
            </div>
        </main>
    );
};

export default Error;