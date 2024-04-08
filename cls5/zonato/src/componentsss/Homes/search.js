import React, { Component } from "react";
import "./search.css";

const base_url = process.env.REACT_APP_URL;

class Search extends Component {

    constructor() {
        console.log("inside constructor")
        super()
        this.state = {
            Location: "",
            Restaurent: ""
        }
    }

    randercity = (data) => {
        // console.log("connencting", data);
        if (data) {
            return data.map((items) => {
                return (
                    <option value={items.state_id} key={items._id}>{items.state}</option>
                )
            })
        }
    }
    //http://3.17.216.66:4000/restaurant?stateId=1
    handlecity = (event) => {
        console.log(event.target.value);
        let stateId = event.target.value;
        fetch(`${base_url}/restaurant?stateId=${stateId}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                this.setState({ Restaurent: data })
            })
    }
    renderrestaurant = (data) => {
        if (data) {
            return data.map((items) => {
                return (
                    <option value={items.restaurant__id} key={items._id}>{items.restaurant_name} | {items.address}</option>
                )
            })
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
                    <select onChange={this.handlecity}>
                        <option>---Select City---</option>
                        {this.randercity(this.state.Location)}
                    </select>
                    <select className="restSelect">
                        <option>---Select Restaurent---</option>
                        {this.renderrestaurant(this.state.Restaurent)}
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
        // http://3.17.216.66:4000/location
        console.log("inside componentDidMount")
        //  calling api's.
        fetch(`${base_url}/location`, { method: "GET" })
            //returning promises.
            .then((res) => (res.json()))
            //returning data.
            .then((data) => {
                console.log(data);
                this.setState({ Location: data });
            })

            .catch((err) => {
                console.error(err);
            })
    }
}
export default Search;