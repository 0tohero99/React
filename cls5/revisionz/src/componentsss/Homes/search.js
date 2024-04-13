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
  randerstate = (data) => {
    // console.log("rendering",data);
    if (data) {
      return data.map((items) => {
        return (
          <option value={items.state_id} key={items._id}>{items.state}</option>
        )
      })
    }
  }
  render() {
    console.log("render>>>");

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
            {this.randerstate(this.state.Location)}
          </select>
          <select className='restSelect'>
            <option>---Select  Restaurent---</option>
          </select>
        </div>
      </div>
    )
  }
  componentDidMount() {
    fetch(`${base_url}/location`, { method: 'GET' })
      .then((response) => (response.json()))
      .then((data) => {
        // console.log(data)
        this.setState({ Location: data })
      })
  }
}
export default search;
