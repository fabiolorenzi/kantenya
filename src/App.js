import React from "react";
import {Switch, Route} from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import TermsConditions from "./components/TermsConditions.jsx";
import Products from "./components/Products.jsx";
import ProdNoodles from "./components/ProdNoodles.jsx";
import ProdNoodleSapporoRed from "./components/ProdNoodleSapporoRed.jsx";
import ProdNoodleSapporoGreen from "./components/ProdNoodleSapporoGreen.jsx";
import ProdNoodleSapporoYellow from "./components/ProdNoodleSapporoYellow.jsx";
import ProdMisoPastes from "./components/ProdMisoPastes.jsx";
import ProdMisoPastesRedMiso from "./components/ProdMisoPastesRedMiso.jsx";
import ProdMisoPastesWhiteMiso from "./components/ProdMisoPastesWhiteMiso.jsx";
import ProdSoySauces from "./components/ProdSoySauces.jsx";
import ProdSoySauceKikkoman from "./components/ProdSoySauceKikkoman.jsx";
import ProdTofu from "./components/ProdTofu.jsx";
import ProdTofuBlueTofu from "./components/ProdTofuBlueTofu.jsx";
import ProdSeaweed from "./components/ProdSeaweed.jsx";
import ProdSeaweedMekabuDried from "./components/ProdSeaweedMekabuDried.jsx";
import ProdRice from "./components/ProdRice.jsx";
import ProdRiceToyamaRice5kg from "./components/ProdRiceToyamaRice5kg.jsx";
import ProdBeer from "./components/ProdBeer.jsx";
import ProdBeerSapporo from "./components/ProdBeerSapporo.jsx";
import ProdBeerAsahi from "./components/ProdBeerAsahi.jsx";
import ProdSake from "./components/ProdSake.jsx";
import ProdSakeOzeki from "./components/ProdSakeOzeki.jsx";
import ProdOther from "./components/ProdOther.jsx";
import ProdOtherTeapotSet from "./components/ProdOtherTeapotSet.jsx";
import ReadyMeals from "./components/ReadyMeals.jsx";
import Blog from "./components/Blog.jsx";
import BlogSushiRice from "./components/BlogSushiRice.jsx";
import BlogGyoza from "./components/BlogGyoza.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Contacts from "./components/Contacts.jsx";
import Error from "./components/Error.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/kantenya" component={Home} /> 
                <Route path="/terms-conditions" component={TermsConditions} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/products/noodles" component={ProdNoodles} />
                <Route path="/products/noodles/sapporo-red" component={ProdNoodleSapporoRed} />
                <Route path="/products/noodles/sapporo-green" component={ProdNoodleSapporoGreen} />
                <Route path="/products/noodles/sapporo-yellow" component={ProdNoodleSapporoYellow} />
                <Route exact path="/products/miso-pastes" component={ProdMisoPastes} />
                <Route path="/products/miso-pastes/hikari-red-miso" component={ProdMisoPastesRedMiso} />
                <Route path="/products/miso-pastes/hikari-white-miso" component={ProdMisoPastesWhiteMiso} />
                <Route exact path="/products/soy-sauces" component={ProdSoySauces} />
                <Route path="/products/soy-sauces/kikkoman" component={ProdSoySauceKikkoman} />
                <Route exact path="/products/tofu" component={ProdTofu} />
                <Route path="/products/tofu/blue-tofu" component={ProdTofuBlueTofu} />
                <Route exact path="/products/seaweed" component={ProdSeaweed} />
                <Route path="/products/seaweed/mekabu-dried-seaweed" component={ProdSeaweedMekabuDried} />
                <Route exact path="/products/rice" component={ProdRice} />
                <Route path="/products/rice/toyama-sushi-rice-5kg" component={ProdRiceToyamaRice5kg} />
                <Route exact path="/products/beer" component={ProdBeer} />
                <Route path="/products/beer/sapporo" component={ProdBeerSapporo} />
                <Route path="/products/beer/asahi" component={ProdBeerAsahi} />
                <Route exact path="/products/sake" component={ProdSake} />
                <Route path="/products/sake/ozeki" component={ProdSakeOzeki} />
                <Route exact path="/products/other" component={ProdOther} />
                <Route path="/products/other/teapot-set" component={ProdOtherTeapotSet} />
                <Route path="/readymeals" component={ReadyMeals} />
                <Route exact path="/blog" component={Blog} />
                <Route path="/blog/how-to-cook-japanese-rice-and-sushi-rice" component={BlogSushiRice} />
                <Route path="/blog/how-to-prepare-traditional-gyoza-at-home" component={BlogGyoza} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/contacts" component={Contacts} />
                <Route component={Error} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;