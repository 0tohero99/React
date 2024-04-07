import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Profile from "./profile";
import Post from "./post";
import Homes from "./homes";
import Details from "./details";
const Routings = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route  exact path="/" component={Homes} />
            <Route path="/post" component={Post} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/profile/:topic" component={Details} />
            <Footer />
        </BrowserRouter>
    )

}
export default Routings;