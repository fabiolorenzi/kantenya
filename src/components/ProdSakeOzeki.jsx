import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import ozeki from "../img/prodSake.jpg";

function ProdSakeOzeki() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1 id="singleItemTitle">SAKE / OZEKI</h1>
                <Link to="/products/sake" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="singleItem">
                <div className="prodLeft">
                    <img src={ozeki} alt="ozeki sake" />
                </div>
                <div className="prodRight">
                    <div className="prodName">
                        <h1>NAME:</h1>
                        <h2>Ozeki</h2>
                    </div>
                    <div className="prodPrice">
                        <h1>PRICE:</h1>
                        <h2>£ 12,99</h2>
                    </div>
                    <div className="prodDesc">
                        <h1>DESCRIPTION:</h1>
                        <h2>
                            Ozeki Dry sake is a dry sake with a refreshing fruity flavor and tastes best when served either 
                            chilled, or gently warmed to around 40-45 degrees celsius. With its lower than average alcohol content, 
                            smooth taste, and versatility of ideal serving temperature, this sake is ideal for first-time sake 
                            drinkers to try and experiment with. It pairs well with chicken, light Asian dishes, sashimi, sushi, 
                            and it can be also poured over fresh or grilled oysters to add depth of flavour. Made in USA.
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProdSakeOzeki;