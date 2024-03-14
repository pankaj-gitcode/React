import React, { Suspense, lazy } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate, useNavigation } from 'react-router-dom';

const Products = lazy(()=>import('./components/Products'));
const Services = lazy(()=>import('./components/Services'));
const ContactUs = lazy(()=>import('./components/ContactUs'));
const Home = lazy(()=>import('./components/Home'));

export default function App(){

  return(
    <div>
      <BrowserRouter>
        <Suspense fallback={'Loading...'}>
          <div><Navigations /></div>
          <Routes>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/products'} element={<Products />}/>
            <Route path={'/services'} element={<Services />}/>
            <Route path={'/contact'} element={<ContactUs/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

const Navigations = ()=>{

  const navigation = useNavigate();
   
  return(
    <div>
      <button onClick={()=>navigation('/')}>Home</button>
      <button onClick={()=>navigation('/products')}>Products</button>
      <button onClick={()=>navigation('/services')}>Services</button>
      <button onClick={()=>navigation('/contact')}>Contact Us</button>
    </div>
  )
}