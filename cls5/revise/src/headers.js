import React, {useState } from "react";
import "./header.css"

const Headers =(props)=>{
    const heading= useState("React")
    const [text,settext]= useState(" search here !")


   const handleChange = (event) => {
        console.log(event)
        settext( event.target.value);
        props.searchselect(event.target.value)
    }
    return (
        <header >
            <h2> {heading} </h2>
            <input placeholder={text} onChange={handleChange} />
            {/* <div style={{ fontSize: "23px" }}>{text}</div> */}
        </header>
    )
}
  
  
export default Headers;