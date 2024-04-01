import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Homes from "./homes";
import Post from "./post";
import Profile from "./profile";
import Details from "./details";
import Mains from "./mains";

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Mains />} >
                    <Route index element={<Homes />} />
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