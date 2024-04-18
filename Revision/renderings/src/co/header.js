import React, { Component } from 'react'

class header extends Component {
    constructor(props){
        super(props)
        this.state={
            title:"React",
            text:"Search here !"
        }
    }
    handlechange= (event) => {
        console.log()
        this.setState({text:event.target.value})
        this.props.searchdata(event.target.value)
        }
    
    render() {
        const styles = {
            header: {
                backgroundColor: "green",
                textAlign: "center"
    
            }
        }
        return (
            <header style={styles.header}>
                <h1>{this.state.title}</h1>
                <input style={{marginBottom:"13px",height: "23px", borderRadius: "3px",backgroundColor:"lightblue" ,border: "none" }}placeholder={this.state.text}  onChange={this.handlechange} />
                {/* <h3>{this.state.text} </h3> */}
            </header>
        )
    }
}

export default header
