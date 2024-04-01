import React from "react";

const Products = (props) => {
    // console.log(typeof(props.allitems))
    console.log(props)

    const randeritems = props.allitems.map((items) => {
         return (
            <div className="cards">
                <img src={items.image} alt={items.name} />
                <div>
                    <p>{items.name}</p>
                    <p>{items.discount}</p>
                    <p>{items.cost}</p>
                    

                </div>
            </div>
        )
    })
    return (
        <div className="main">
            {randeritems}
        </div>
    )
}
export default Products;