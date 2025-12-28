import React from 'react'
import {Routes,Route} from "react-router-dom"
import {Home,Result,BuyCredit} from "../pages/indexPages"


export const AllRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/buy" element={<BuyCredit/>}/>
    </Routes>
    </div>
  )
}
