import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Post from "./post";
import Profile from "./profile";
import Details from "./details";
import Home from "./homes";
import Mains from "./mains";

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Mains />} >
                    <Route index element={<Home />} />
                    <Route path="/post" element={<Post />} />
                    <Route path="/post/:topic" element={<Details />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default Routing;