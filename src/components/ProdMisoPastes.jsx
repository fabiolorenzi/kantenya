import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import misoRed from "../img/prodMisoPaste.jpg";
import misoWhite from "../img/prodWhiteMiso.jpg";

function ProdMisoPastes() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1>MISO PASTES</h1>
                <Link to="/products" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="productsClass">
                <div className="productsBlock">
                    <Link to="/products/miso-pastes/hikari-red-miso" className="productsItem">
                        <img src={misoRed} alt="red Miso" />
                        <h2>HIKARI RED MISO</h2>
                    </Link>
                </div>
                <div className="productsBlock">
                    <Link to="/products/miso-pastes/hikari-white-miso" className="productsItem">
                        <img src={misoWhite} alt="hikari-white miso" />
                        <h2>HIKARI WHITE MISO</h2>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ProdMisoPastes;