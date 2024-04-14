import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header';
import Footers from './footers';
import Home from './home';
import Post from './posts';
import Profile from './profiles';

const routing = () => {
    return (

        <BrowserRouter>
           
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/post" component={Post} />
            <Route path="/profile" component={Profile} />
            <Footers />
        </BrowserRouter>
    )
}

export default routing;
