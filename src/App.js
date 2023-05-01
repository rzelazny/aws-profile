import React from "react";
import Navibar from "./components/Navibar/Navibar";
// import Footer from "./components/Footer/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About.js";
import NoMatch from "./pages/NoMatch/NoMatch.js";
import "./App.css";
const App = props => {
    return (
    <>
        <HashRouter basename="/">
        <Navibar />
            <Routes>
                <Route exact path='/' element={<About />} />
                <Route element={<NoMatch />} />
            </Routes>
        </HashRouter>
        {/* <Footer /> */}
    </>
    );
}
export default App

