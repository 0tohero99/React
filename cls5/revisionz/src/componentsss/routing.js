import React from 'react'
import { BrowserRouter, Route,   } from "react-router-dom";
import Header from "./header.js";
import Footer from "./footer.js";
import Homes from "./Homes/home.js";

const routing = () => {
    return (
        <BrowserRouter>
            <Header />
                <Route path="/" component={Homes}/>
            <Footer />
        </BrowserRouter>
    )
}

export default routing
