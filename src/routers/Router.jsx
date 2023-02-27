import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";
import Shop from "../pages/Shop";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Checkout from "../pages/Checkout";




function Router(){
    return(
        <Routes>
           <Route path="/" element={<Navigate to='home' />}/> 
            <Route path='home' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='cart' element={<Cart />} />
            <Route path='shop/:id' element={<ProductDetail />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
        </Routes>
    )
}

export default Router;