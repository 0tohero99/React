import React, { useState } from "react";

const Header = () => {

    const [title] = useState("React");
    const [count, setcount] = useState(0);
 
    const updatecount = () => {
        setcount(count + 1)
    }

    const [count1,setcount1] = useState(0);
    // const updatecount1 = () => {
    //     setcount1(count1 + 1)
    // }
     
    return (
        <header>
            <center>
                <h2 style={{ marginBottom: "0" }}>{title}</h2>
                <h2>{count}</h2>
                 <button onClick={updatecount}>count</button>
                 <h2>{count1}</h2>
                 <button onClick={()=>{setcount1(count1 + 1)}}>count1</button>

                {/* <input onChange={this.handleChange} placeholder={this.state.search}></input> */}
            </center>
            <hr />
        </header>
    )
}



export default Header;