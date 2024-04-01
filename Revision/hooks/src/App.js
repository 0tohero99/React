import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Products from "./products";
import JSON from "./data.json";

const Apps = () => {
  const [Datas,setDatas] = useState(JSON)
  const filterdata = (divsearch) => {
    let data =Datas.filter((data) => {
      return data.name.toLowerCase().indexOf(divsearch.toLowerCase()) > -1
    })
    setDatas(data)
  }
  return (
    <>
      <Header getsearch={(data) => { filterdata(data) }} />
      <Products allitems={Datas} />
      <Footer year="2024" />
    </>
  )
}
export default Apps;

