import React from "react";
import Navi from "./components/Navi/Navi";
import Footer from "./components/Footer/Footer";
import { HashRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";

const Layout = () => {
    return (
    <>
        <HashRouter basename="/">
        <Navi />
            <Switch>
                <Route exact path='/' component={About} />
                <Route component={NoMatch} />
            </Switch>
        </HashRouter>
        <Footer />
    </>
    );
}
export default Layout