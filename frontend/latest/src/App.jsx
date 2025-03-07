
/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import React from 'react'
import {Login,Signup,Home, MyProducts,Cart} from "./routes/Routes"
import CreateProduct from './pages/CreateProduct';
import ProductDetails from './pages/productDetails';

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Create-Product' element={<CreateProduct/>}/>
      <Route path='/my-products' element={<MyProducts/>}/>
      <Route path='/productDetails' element={<ProductDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
  
}
export default App;