import React, { Component } from "react";
import Header from "../componentss/header";
import Footer from "../componentss/footer";
import Items from "../componentss/products";
import JSON from "../componentss/data.json";


class App extends Component {
    constructor() {
        super();
        this.state = {
            // productData: JSON,
            filterData: JSON
        }
    }
    filterdata = (keywords) => {
        let output = this.state.filterData.filter((data) => {
            return data.name.toLowerCase().indexOf(keywords.toLowerCase()) > -1
        })
        this.setState({ filterData: output })
    }
    render() {
        // console.log(JSON);
        return (
            <>
                <Header userInputs={(data) => { this.filterdata(data) }} />
                <Items Items={this.state.filterData} />
                <Footer year="2024" />
            </>
        )
    }

}

export default App;
