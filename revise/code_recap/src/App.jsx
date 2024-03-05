import React, { Suspense, lazy } from "react";
import './App.css'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
// import { Home } from "./component/Home";
import { Landing } from "./component/Landing";

const Dashboard = lazy(()=>import('./component/Dashboard'));
const Home = lazy(()=>import('./component/Home'));

export default function App(){

  return(
    <div>
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

//component: AppBar
const AppBar = ()=>{
  const navigate = useNavigate();
  return(
    <div>
      <button onClick={()=>navigate('/landing')} className="navigateBtn">Landing Page</button>
      <button onClick={()=>navigate('/dashboard')} className="navigateBtn">Dashing Page</button>
      <button onClick={()=>navigate('/')} className="navigateBtn">Home Page</button>
    </div>
  )
}