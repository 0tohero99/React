import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Products from "./products";
import JSON from "./data.json";

class Apps extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      items: JSON
    }
  }
  filterdata = (divsearch) => {
    let data = this.state.items.filter((data) => {
      return data.name.toLowerCase().indexOf(divsearch.toLowerCase()) > -1
    })
    this.setState({ items: data })
  }
  render() {
    return (
      <>
        <Header getsearch={(data) => { this.filterdata(data) }} />
        <Products allitems={this.state.items} />
        <Footer year="2024" />
      </>
    )
  }
}
export default Apps;

 