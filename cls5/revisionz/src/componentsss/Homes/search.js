import React,{Component} from 'react';
import './search.css';

const base_url = process.env.REACT_APP_CITY_URL;
// `${base_url}/location`
class Search extends Component {

    constructor(){
        super()
        //console.log(">>>>>> inside constructor")
        this.state={
            location:'',
            restaurants:''
        }
    }

    renderCity = (data) => {
        if(data){

            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item._id}>{item.state}</option>
                )
            })
        }
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item._id}>
                        {item.restaurant_name} | {item.address} 
                    </option>
                )
            })
        }
    }

    handleCity = (event) => {
       // console.log(event.target.value);
        let StateId = event.target.value;
        fetch(`${base_url}/restaurant?stateId=${StateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            //console.log(data)
            this.setState({restaurants:data})
        })
    }

    render(){
        //console.log(">>>>>> inside render")
        return(
            <div className="search">
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Search Place Near To You
                </div>
                <div id="dropdown">
                    <select onChange={this.handleCity} id="city-dropdown">
                        <option>---Select City---</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className='restSelect'>
                        <option>---Select Restaurants---</option>
                        {this.renderRest(this.state.restaurants)}
                    </select>
                </div>
            </div>
        )
    }


    // api calling on page load 
    componentDidMount(){
        //console.log(">>>>>> inside componentDidMount");
        fetch(`${base_url}/location`,{method: 'GET'})
        //return promise
        .then((res) =>  res.json())
        // return data
        .then((data) => {
            //console.log(data);
            this.setState({location:data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export default Search;