import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Post from "./post";
import Profile from "./profile";
import Details from "./details";
import Home from "./homes";

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            {/* <Link to="/">Home</Link>
            <Link to="/post">Post</Link>
            <Link to="/profile">Profile</Link> */}
            <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/post" component={Post} />
            <Route path="/post/:topic" component={Details} />
            <Route path="/profile" component={Profile} />
            </div>
            <Footer />
        </BrowserRouter>
    )
}
export default Routing;