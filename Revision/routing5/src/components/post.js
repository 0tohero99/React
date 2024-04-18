import React from 'react'
import { Link } from 'react-router-dom'
const post = () => {
  return (
    <div className="panel panel-info">
      <div className="panel panel-heading">
        <h3>post works !</h3>
      </div>
      <div className="panel panel-body">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
       
        <h3>React</h3>
      <Link to="/post/React?test=1" className="btn btn-info">Details</Link>
      <h3>Angular</h3>
      <Link to="/post/Angular?test=2" className="btn btn-info">Details</Link>
      <h3>Nodes</h3>
      <Link to="/post/Nodes?test=3" className="btn btn-info">Details</Link>
      </div>
    </div>

  )
}

export default post
