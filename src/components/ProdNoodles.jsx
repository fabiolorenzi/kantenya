import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import sapporoRed from "../img/prodSapporoRed.jpg";
import sapporoGreen from "../img/prodSapporoGreen.jpg";
import sapporoYellow from "../img/prodSapporoYellow.jpg";

function ProdNoodles() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1>NOODLES</h1>
                <Link to="/products" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="productsClass">
                <div className="productsBlock">
                    <Link to="/products/noodles/sapporo-red" className="productsItem">
                        <img src={sapporoRed} alt="sapporo red" />
                        <h2>SAPPORO RED</h2>
                    </Link>
                </div>
                <div className="productsBlock">
                    <Link to="/products/noodles/sapporo-green" className="productsItem">
                        <img src={sapporoGreen} alt="sapporo green" />
                        <h2>SAPPORO GREEN</h2>
                    </Link>
                </div>
                <div className="productsBlock">
                    <Link to="/products/noodles/sapporo-yellow" className="productsItem">
                        <img src={sapporoYellow} alt="sapporo yellow" />
                        <h2>SAPPORO YELLOW</h2>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ProdNoodles;