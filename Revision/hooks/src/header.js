import React, { useState } from "react";
import "./index.css";

const Header = (props) => {
    const title = useState("React");
    const [divsearch,setdivsearch] = useState("user inputs here !")

    const handlechange = (event) => {
        setdivsearch(event.target.value )
        props.getsearch(event.target.value)
    }
    return (
        <center>
            <h2>{title}</h2>
            <input onChange={handlechange} placeholder={divsearch} />
            {/* <h3>{this.state.divsearch}</h3> */}
            <hr />
        </center>
    )
}

export default Header;


// import React, { usestate } from "react";
// import Header from "./header";
// import Footer from "./footer";
// import Products from "./products";
// import JSON from "./data.json";


// const Apps =()=>{

// const items = usestate(JSON)

//   return (
//     <>
//       <Header getsearch={(data) => { this.filterdata(data) }} />
//       <Products allitems={this.state.items} />
//       <Footer year="2024" />
//     </>
//   )
// }


 
//   filterdata = (divsearch) => {
//     let data = this.state.items.filter((data) => {
//       return data.name.toLowerCase().indexOf(divsearch.toLowerCase()) > -1
//     })
//     this.setState({ items: data })
//   }
   
// export default Apps;