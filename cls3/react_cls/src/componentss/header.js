import React, { Component } from 'react';
// import "./header.css";


class Header extends Component {
    // constructor first get called in the cls.//
    // any decration will hapen through the constructor.//
    // declsaring state.//
    constructor() {
        //it makes this to be accessible.//
        // super is required  to access tthe properties from the parent class whenever constructor is used.//
        super()
        this.state = {
            title: "React",
            keywords: "User Text Here"
        }

    }
    handleChange = (event) => {
        // console.log(event.target.value);
        this.setState({ keywords: event.target.value })
        this.props.userInputs(event.target.value);

    }
    render() {

        // styling tthrough inline and style.//
        const style = {
            header: {
                backgroundColor: "green",
                textAlign: "center",
            },
            color: {
                fontSize: "23px",
                color: "wheat"
            },
            input: {
                backgroundColor: "lightblue",
                border: "none",
                height: "30px",
                borderRadius: "17%"
            }
        }

        return (

            <header style={style.header} >
                <div style={style.color}>{this.state.title}</div>
                <input onChange={this.handleChange} style={style.input} />
                <div style={{ color: "wheat", fontSize: "19px", textAlign: "center" }}>{this.state.keywords}</div>
            </header>
        )
    }
}
export default Header;