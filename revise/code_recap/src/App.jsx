import React, { Suspense, lazy } from "react";
import './App.css'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import Navigation from "./components/Navigation";
// import { Home } from "./components/Home";
// import Landing from "./components/Landing";
// import Dashboard from "./components/Dashboard";

const Home = lazy(()=>import('./components/Home'));
const Landing = lazy(()=>import('./components/Landing'));
const Dashboard = lazy(()=>import('./components/Dashboard'));

export default function App(){

  return(
    <div>
      <Navigation/>
      <BrowserRouter>
        <div><AppBar/></div>
        <Suspense fallback={<p>Loading...</p>}>

        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/landing'} element={<Landing/>}/>
          <Route path={'/dashboard'} element={<Dashboard/>}/>
        </Routes>


        </Suspense>
      </BrowserRouter>
    </div>
  )
}

const AppBar = ()=>{
  const navigate = useNavigate();

  const landingFunc = ()=>{
    navigate('/landing');
    // const btn = document.getElementById('btn');
    // btn.classList.add('landing');
  }

  return(
    <div>
      <button onClick={()=>navigate('/')}>Home</button>
      <button onClick={landingFunc} id='btn'>Landing Page</button>
      <button onClick={()=>navigate('/dashboard')}>Dashboard Page</button>
    </div>
  )
}