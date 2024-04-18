import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './homes';
import Post from './post';
import Profile from './profile';
import Details from './details';

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/post" component={Post} />
            <Route path="/post/:topics" component={Details} />
            <Route path="/profile" component={Profile} />
            <Footer />
        </BrowserRouter>
    )
}

export default Routing
