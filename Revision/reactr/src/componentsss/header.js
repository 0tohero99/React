import React, { Component } from 'react';
import "./header.css";
class Header extends Component {
    constructor() {
        super()
        this.state = {
            headertext: "React",
            search: "  Search here !"
        }
    }
    handlechange = (event) => {
        console.log(event);
        this.setState({ search: event.target.value })
        this.props.filterdata(event.target.value)
    }

    render() {
        const styles = {
            header: {
                textAlign: "center",
                backgroundColor: "green"
            },
            input: {
                height: "23px",
                borderRadius: "7px",
                border: "none",
                backgroundColor: "lightgray",
                margin:"3%"
            }
        }
        return (
            <header style={styles.header}>
                <h2>{this.state.headertext}</h2>
                <input style={styles.input} onChange={this.handlechange} placeholder={this.state.search} />
                {/* <h3> {this.state.search}</h3> */}
            </header >
        )
    }

}

export default Header;
