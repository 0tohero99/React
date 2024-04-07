import React from "react";
import "./header.css"

const Content = (props) => {
    const randercontent = props.content.map((items) => {
        return (
            <div className="cards">
                <img src={items.image} alt={items.name} />
                <div>
                    <p>{items.name}</p>
                    <p>{items.uses}</p>
                    <p>Rs {items.cost} .</p>

                </div>
            </div>
        )
    })
    return (
        <div className="main">
            {randercontent}
        </div>
    )
}
export default Content;