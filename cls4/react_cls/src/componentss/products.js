import React from 'react';
import "./products.css";
const allItems = (props) => {
    //1:17 hr//
    const randerProducts = props.Items.map((items) => {
        return (
            <div className="card" key={items.id}>
                <img src={items.image} alt={items.name} />
                <div>
                    <p>{items.name}</p>
                     <p>Rs.{items.cost}.</p>
                    <p>{items.discount}</p>
                </div>
            </div>
        )
    })
    return (
        <div className="main">
            {randerProducts}
        </div>
    )
}
export default allItems;



// class Items extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         console.log(this.props)

//         return (
//             <>
//                 <h1>items pages:</h1>
//             </>
//         )
//     }    g