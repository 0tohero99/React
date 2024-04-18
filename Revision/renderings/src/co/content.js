import React from 'react'
import './content.css'
const content = (props) => {
    const randercontent = props.contentsdata.map((items) => {
        return (
            <div className="box" key={items.id}>
                <img src={items.image} alt={items.name} />
                <div>
                    <p>{items.name}</p>
                    <p>{items.discount}</p>
                    <p>Rs {items.cost} .</p>
                </div>
            </div>
        )
    })



    return (
        <div className='containers' >
            {randercontent}
        </div>
    )
}

export default content
