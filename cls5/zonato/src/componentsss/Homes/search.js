import React, { Component } from "react";
import "./search.css";

const base_url = process.env.REACT_APP_URL;

class Search extends Component {

    constructor() {
        console.log("inside constructor")
        super()
        this.state = {
            Location: ""
        }
    }
    render() {
        console.log("inside render")

        return (
            <div className="search">
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Search Place Near To You
                </div>
                <div id="dropdown">
                    <select>
                        <option value="" disabled selected>---Select City---</option>
                    </select>
                    <select className="restSelect">
                        <option value=""  >---Select Restaurent---</option>
                    </select>
                </div>
            </div>

        )
    }

    //  flow is :constructor >render >componentdidmount| 
    // = how we call api?
    // = fetch /axios . note: fetch is the native mathod in js to call api's|            

    //  api calling on page loads: 
    componentDidMount() {
        console.log("inside componentDidMount")

        //  calling api's.
        fetch(`${base_url}/location`, { method: 'GET' })
            //returning promises.
            .then((res) => (res.json()))
            //returning data.
            .then((data) =>console.log(data))
            .catch((err) => {
                console.error(err);
            })
    }
}
export default Search;