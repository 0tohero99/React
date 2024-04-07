import React, { useState } from "react";
import Headers from "./headers";
import Footer from "./footers";
import Content from "./contents";
import JSON from "./data.json"

const AppComponent = ()=>{
    const [allcontent,setallcontent] = useState(JSON) 


   const onsearch = (text) => {
        let searchdata = allcontent.filter((data) => {
            return data.name.toLowerCase().indexOf(text.toLowerCase()) >-1

        })
        setallcontent(searchdata)
    }
    return (
        <>
            <Headers searchselect={(data)=>{onsearch(data)}} />
            <Content content={allcontent} />
            <Footer year="2024" />
        </>
    )
}
 
export default AppComponent;