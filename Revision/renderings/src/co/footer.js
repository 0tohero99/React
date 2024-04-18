import React from 'react'

const footer = (props) => {
  return (
    <footer style={{backgroundColor:"green"}}>
       <div style={{fontSize:"17px",textAlign:"center"}}>&copy; new learner {props.year} ! </div>
    </footer>
  )
}

export default footer
