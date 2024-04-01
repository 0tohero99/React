import React, { Component } from "react";

class Header extends Component {
    constructor() {
        super()
        this.state = {
            search: "Search here !",
            divsearch: "User Text Here !"
        }
    }
    handleChange = (event) => {
        this.setState({ divsearch: event.target.value });
        this.props.Userinputs(event.target.value)
    }
    render() {
        const styles = {
            input: {
                border: "none",
                backgroundColor: "lightblue",
                borderRadius: "7px"
            }
        }
        return (
            <header>
                <center>
                    <h2 style={{ marginBottom: "0" }}>React</h2>
                    <input style={styles.input} onChange={this.handleChange} placeholder={this.state.search}></input>
                    <div>{this.state.divsearch} </div>
                </center>
                <hr />
            </header>
        )
    }
}

export default Header;