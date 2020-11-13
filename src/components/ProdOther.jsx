import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import teapot from "../img/prodOther.jpg";

function ProdOther() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1>OTHER</h1>
                <Link to="/products" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="productsClass">
                <div className="productsBlock">
                    <Link to="/products/other/teapot-set" className="productsItem">
                        <img src={teapot} alt="traditional japanese teapot set" />
                        <h2>TEAPOT SET</h2>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ProdOther;