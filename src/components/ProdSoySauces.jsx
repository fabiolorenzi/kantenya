import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import kikkoman from "../img/prodSoySauceKikkoman.jpeg";

function ProdSoySauces() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1>SOY SAUCES</h1>
                <Link to="/products" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="productsClass">
                <div className="productsBlock">
                    <Link to="/products/soy-sauces/kikkoman" className="productsItem">
                        <img src={kikkoman} alt="kikkoman soy sauce" />
                        <h2>KIKKOMAN SOY SAUCE</h2>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ProdSoySauces;