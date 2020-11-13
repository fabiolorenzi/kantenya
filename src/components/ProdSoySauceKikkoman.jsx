import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import kikkoman from "../img/prodSoySauceKikkoman.jpeg";

function ProdSoySauceKikkoman() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1 id="singleItemTitle">SOY SAUCES / KIKKOMAN SOY SAUCE</h1>
                <Link to="/products/soy-sauces" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="singleItem">
                <div className="prodLeft">
                    <img src={kikkoman} alt="kikkoman soy sauce" />
                </div>
                <div className="prodRight">
                    <div className="prodName">
                        <h1>NAME:</h1>
                        <h2>Kikkoman Soy Sauce</h2>
                    </div>
                    <div className="prodPrice">
                        <h1>PRICE:</h1>
                        <h2>£ 2,50</h2>
                    </div>
                    <div className="prodDesc">
                        <h1>DESCRIPTION:</h1>
                        <h2>
                            Kikkoman's naturally brewed soy sauce contains just four ingredients – soybeans, wheat, salt and 
                            water. Its rich, mellow flavour comes from long months of unhurried natural brewing - similar to how a fine wine 
                            is produced.
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProdSoySauceKikkoman;