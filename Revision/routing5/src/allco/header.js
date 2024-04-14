import React, { Component } from 'react';
import { Link } from 'react-router-dom';
  
class Header extends Component {
    constructor() {
        super()
        this.state = {
            headertext: "React",
        }
    }

    render() {
        const styles = {
            header: {
                height:"70px", 
                textAlign: "center",
                backgroundColor: "green"
            },
            nav:{
                display:"flex",
                justifyContent: "space-evenly"
             }, 
             Link:{
                textDecoration:"none",
                color:"wheat"
             }
             
        }
        return (
            <header style={styles.header}>
                <h2>{this.state.headertext}</h2>
                <nav style={styles.nav}>
                    <Link style={styles.Link} to="/">Home</Link>
                    <Link style={styles.Link}to="/post">Post</Link>
                    <Link style={styles.Link}to="profile/">Profile</Link>
                </nav>
            </header >
        )
    }

}

export default Header;
