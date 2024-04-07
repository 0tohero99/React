import React from "react";


const  Footer = (props) => {
    return (
        <footer style={{textAlign:"center", backgroundColor:"green", height:"35px" , display:"flex", justifyContent:"center",  alignItems:"center", fontSize:"19px"}}>
            &copy; New Learner {props.year} .
        </footer>
    )
}
export default Footer;