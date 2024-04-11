import React, { Component } from 'react'
import "./search.css";

const base_url = process.env.REACT_APP_CITY_URL;
class search extends Component {
  constructor() {
    console.log("constructor");
    super()
    this.state = {
      Location: " "
    }
  }
  render() {
    console.log("render");

    return (
      <div className='search'>
        <div id="logo">
          <span>D!</span>
        </div>
        <div id="heading">
          Search Place Near To You !
        </div>
        <div id="dropdown">
          <select>
            <option>---Select City---</option>
          </select>
          <select className='restSelect'>
            <option>---Select  Restaurent---</option>
          </select>
        </div>
      </div>
    )
  }
  componentDidMount() {
    console.log("componentDidMount");
    fetch(`${base_url}/location`, { method: "GET" })
      .then((res) => console.log(res.json()))
      .then((data) => console.log(data))

  }
}
export default search;
