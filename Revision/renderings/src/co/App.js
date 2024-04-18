import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'
import Content from './content'
import JSON from './data.json'
class App extends Component {
  constructor() {
    super()
    this.state = {
      contentsdata: JSON,
      filter: JSON
    }
  }
  filterdata = (text) => {
    let output = this.state.contentsdata.filter((data) => {
      return data.name.toLowerCase().indexOf(text.toLowerCase()) > -1
    })
    this.setState({filter: output})
  }
  render() {
    return (
      <>
        <Header searchdata={(data) => { this.filterdata(data) }} />
        <Content contentsdata={this.state.filter} />
        <Footer year="2024" />
      </>
    )
  }
}

export default App
