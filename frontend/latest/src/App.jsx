
/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import React from 'react'
import {Login,Signup,Home, MyProducts} from "../routes/routes"
import CreateProduct from './pages/CreateProduct';
import ProductDetails from './pages/productDetails';

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/CreateProduct' element={<CreateProduct/>}/>
      <Route path='/myProducts' element={<MyProducts/>}/>
      <Route path='/productDetails' element={<ProductDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
  
}
export default App;