import React from "react";
import { Link } from "react-router-dom";
 
const Post = () => {
    return (
        <>
            <div className="panel panel-success">
                <div className="panel-heading">
                    Post works .
                </div>
                <div className="panel-body">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <h2>React.</h2>
                    <Link to="/post/React?test=1" className="btn btn-info">Details</Link> 
                    <h2>Angular.</h2>
                    <Link to="/post/Angular?test=2" className="btn btn-info">Details</Link> 
                    <h2>Node.</h2>
                    <Link to="/post/Node?test=3" className="btn btn-info">Details</Link> 
                     
                </div>
            </div>
        </>
    )
}
export default Post;