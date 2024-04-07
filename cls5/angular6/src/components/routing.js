import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Profile from "./profile";
import Post from "./post";
import Homes from "./homes";
import Details from "./details";
import Mains from "./mains";
const Routings = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Mains />} >
                    <Route index element={<Homes />} />
                    <Route path="post" element={<Post />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="profile/:topic" element={<Details />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )

}
export default Routings;