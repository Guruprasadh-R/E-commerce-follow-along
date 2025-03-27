
/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import React from 'react'
import {Login,Signup,Home, MyProducts,Cart, CreateAddress, Myorders, Profile} from "./routes/Routes"
import CreateProduct from './pages/CreateProduct';
import ProductDetails from './pages/productDetails';
import SelectAddress from './pages/SelectAddress';
import OrderConfirmation from './pages/OrderConfirmation';


function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/create-user' element={<Signup/>}/>
      <Route path='/Create-Product' element={<CreateProduct/>}/>
      <Route path='/my-products' element={<MyProducts/>}/>
      <Route path='/productDetails' element={<ProductDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/createAddress' element={<CreateAddress/>}/>
      <Route path='/SelectAddress' element={<SelectAddress/>}/>
      <Route path='/OrderConfirmation' element={<OrderConfirmation/>}/>
      <Route path='/myorders' element={<Myorders/>}/>
      <Route path='/profile' element={<Profile/>}/>
  
      
    </Routes>
    </BrowserRouter>
  )
  
}
export default App;