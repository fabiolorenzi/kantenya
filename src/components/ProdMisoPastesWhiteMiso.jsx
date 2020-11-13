import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import misoWhite from "../img/prodWhiteMiso.jpg";

function ProdMisoPastesWhiteMiso() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1 id="singleItemTitle">MISO PASTES / HIKARI WHITE MISO</h1>
                <Link to="/products/miso-pastes" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="singleItem">
                <div className="prodLeft">
                    <img src={misoWhite} alt="white miso" />
                </div>
                <div className="prodRight">
                    <div className="prodName">
                        <h1>NAME:</h1>
                        <h2>Hikari White Miso</h2>
                    </div>
                    <div className="prodPrice">
                        <h1>PRICE:</h1>
                        <h2>£ 1,50</h2>
                    </div>
                    <div className="prodDesc">
                        <h1>DESCRIPTION:</h1>
                        <h2>
                            This White miso is made of 100% Organic Rice and Soybeans. Additive free, Gluten Free, No GMOs and 
                            No MSG. Product of Japan.
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProdMisoPastesWhiteMiso;