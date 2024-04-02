import React from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Home from "./Homes/home"
const Routing = ()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Route path="/" component={Home} />
        <Footer/>
        </BrowserRouter>
    )
}
export default Routing;