import React from 'react'
import "./content.css"
const content = (props) => {

    const randercontent = props.all_data.map((items) => {
        return(
            <div className='box' key={items.id}>
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
        <div className='contentbox'>
            {randercontent}
        </div>
    )
}

export default content
