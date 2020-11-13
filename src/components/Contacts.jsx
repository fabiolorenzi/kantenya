import React from "react";

import logo from "../img/logo.png";

function Contacts() {
    return (
        <main className="aboutusClass">
            <div className="contactsBanner">
                <img src={logo} alt="kantenya's logo" />
                <h1>CONTACTS</h1>
            </div>
            <div className="contactsClass">
                <div className="contactsBlock">
                    <div className="contactsAddr">
                        <h1>ADDRESS</h1>
                        <p>
                            5 Fenchurch Walk<br />
                            Brighton<br />
                            BN1 4GX
                        </p>
                        <h1>OPENING TIMES</h1>
                        <p>
                            Mon - Fri: 10:00am - 17:30pm<br />
                            Sat - Sun: 11:00am - 16:30pm
                        </p>
                    </div>
                    <hr />
                    <div className="contactsNum">
                        <h1>PHONE</h1>
                        <p>01273 819850</p>
                    </div>
                    <hr />
                    <div className="contactsBut">
                        <h1>CONTACT US THROUGH:</h1>
                        <a href="mailto:kantenyabrighton@gmail.com" target="_blank" rel="noreferrer" id="Cemail">EMAIL</a>
                        <a href="https://www.facebook.com/KantenyaBrighton/" target="_blank" rel="noreferrer" id="Cfacebook">FACEBOOK</a>
                        <a href="https://www.instagram.com/kantenya_store/?hl=en" target="_blank" rel="noreferrer" id="Cinsta">INSTAGRAM</a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contacts;