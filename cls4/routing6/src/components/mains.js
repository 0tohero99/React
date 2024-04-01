import React from "react";
import { Outlet } from "react-router-dom";

const Mains = () => {
    return (
        <>
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}

export default Mains;