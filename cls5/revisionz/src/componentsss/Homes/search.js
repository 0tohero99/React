import React, { Component } from 'react'
import "./search.css";

const base_url = process.env.REACT_APP_Base_url;

class search extends Component {
  constructor() {
    console.log("constructor");
    super()
    this.state = {
      Location: " "
    };
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
}

export default search;
