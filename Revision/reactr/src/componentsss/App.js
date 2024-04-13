import React, { Component } from 'react'
import Header from './header';
import Footers from './footers';
import Content from './content';
import JSON from "./data.json";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderdata: JSON
    }
  }
  searchdata = (search) => {
    let output = this.state.renderdata.filter((data) => {
      return data.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
    })
    this.setState({ renderdata: output })
  }
  render() {
    return (
      <>
        <Header filterdata={(data) => { this.searchdata(data) }} />
        <Content all_data={this.state.renderdata} />
        <Footers year="2024 ." />
      </>
    )
  }
}

export default App
