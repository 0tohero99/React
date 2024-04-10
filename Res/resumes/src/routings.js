import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom';
import App from "./co/App"
const routings = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={App} />
 
        </BrowserRouter>
    )
}

export default routings
