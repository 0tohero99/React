import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Headers from "./Homes/Headers";
import Footer from "./Homes/footers";
import Homes from "./Homes/homes";

const Routing = () => {
    return (
        <BrowserRouter>
            <Headers />
            <Route path="/" component={Homes} />
            <Footer />
        </BrowserRouter>
    )
}
export default Routing;