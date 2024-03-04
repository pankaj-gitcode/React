import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import { Home } from './component/Home'
import { Landing } from './component/Landing'
import { Dashboard } from './component/Dashboard'
import { Navigation } from './component/Navigation'

export default function App(){
  return(
    <div>


      <BrowserRouter>
        <div style={{backgroundColor:'brown', padding:'10px'}}><Navigate /></div>
        <Routes>
          <Route path={'/navigation'} element={<Navigation/>}/>
          <Route path={'/'} element={<Home />} />
          <Route path={'/landing'} element={<Landing/>}/>
          <Route path={'/dashboard'} element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

//component: buttons to navigate to different pages
const Navigate = ()=>{
  const navigation = useNavigate();

  const homeFunc = ()=> navigation('/');
  const landingFunc = ()=>navigation('/landing');
  const dashboardFunc = ()=>navigation('/dashboard');

  return(
    <div>
      <button onClick={homeFunc} className='navigateBtn'>Home</button>
      <button onClick={landingFunc} className='navigateBtn'>Landing</button>
      <button onClick={dashboardFunc} className='navigateBtn'>Dashboard</button>
    </div>
  )
}