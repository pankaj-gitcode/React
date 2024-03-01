import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Landing } from './component/Landing'
import { Dashboard } from './component/Dashboard'
import { Home } from './component/Home'


export default function App(){

  const landing = ()=>{window.location.href='/landing'};
  const dashboard = ()=>{window.location.href='/dashboard'}

  return(
    <div>
      <div style={{backgroundColor:'brown'}}><center>Header</center>
      <button onClick={landing}>Landing Page</button>
      <button onClick={dashboard}>Dashboard Page</button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path={'/landing'}  element={<Landing/>}/>
          <Route path={'/dashboard'} element={<Dashboard/>}/>
          <Route path={'/'} element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      <div style={{backgroundColor:'brown'}}><center>Header</center></div>

    </div>
  )
}