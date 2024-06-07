import React, { lazy } from 'react'
import './App.css'

const MainApp = lazy(()=>import('./components/MainApp'));

export default function App(){
  return(
    <div>
      <Header/>
        <MainApp/>
      <Footer/>
    </div>
  )
}

const Header = ()=>{
  return(
    <div>

      <div className="header">
        <ul>
          <li>Followers</li>
          <li>Repo</li>
          <li>All Services</li>
        </ul>
      </div>
    </div>
  )
}

const Footer = ()=>{
  return(
    <div>

    </div>
  )
}