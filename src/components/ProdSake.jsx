import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import ozeki from "../img/prodSake.jpg";

function ProdSake() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1>SAKE</h1>
                <Link to="/products" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="productsClass">
                <div className="productsBlock">
                    <Link to="/products/sake/ozeki" className="productsItem">
                        <img src={ozeki} alt="ozeki sake" />
                        <h2>OZEKI</h2>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ProdSake;