import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from './About';
import Home from './Home';
import Login from './Login';
import Products from './Products';
import Cart from './Cart';
import Resister from './Resister';
import PrivateRoute from './PrivateRoute';
import SinglePage from './SinglePage';


function AllRoutes() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Products" element={
    <PrivateRoute>
    <Products />
    </PrivateRoute>
    } />
    <Route path="/about" element={<About/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/cart" element={<Cart/>} />

    <Route path="/register" element={<Resister/>} />
    <Route path="/singlepage/:id" element={<SinglePage/>} />

  </Routes>
  )
}

export default AllRoutes
