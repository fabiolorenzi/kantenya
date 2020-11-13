import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import misoRed from "../img/prodMisoPaste.jpg";

function ProdMisoPastesRedMiso() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1 id="singleItemTitle">MISO PASTES / HIKARI RED MISO</h1>
                <Link to="/products/miso-pastes" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="singleItem">
                <div className="prodLeft">
                    <img src={misoRed} alt="red miso" />
                </div>
                <div className="prodRight">
                    <div className="prodName">
                        <h1>NAME:</h1>
                        <h2>Hikari Red Miso</h2>
                    </div>
                    <div className="prodPrice">
                        <h1>PRICE:</h1>
                        <h2>£ 1,50</h2>
                    </div>
                    <div className="prodDesc">
                        <h1>DESCRIPTION:</h1>
                        <h2>
                            Less forceful than most red misos and an affable entry into the pungent world of miso. Ideal for soups.
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProdMisoPastesRedMiso;