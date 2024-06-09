import React, { Suspense, lazy } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const MainApp = lazy(()=>import('./components/MainApp'));
const Followers = lazy(()=>import('./components/Followers'));
const Repo = lazy(()=>import('./components/Repo'));
const Details = lazy(()=>import('./components/Details'));

export default function App(){
  return(
    <div>
        <RecoilRoot>

        <BrowserRouter>
          <Header/>
              <Suspense fallback={<p>Loading...</p>}>
          <Routes>
                  <Route path='/' element={<MainApp/>}/>
                  <Route path={'/followers'} element={<Followers/>}/>
                  <Route path={'/repo'} element={<Repo/>}/>
                  <Route path={'/details'} element={<Details/>}/>
          
          </Routes>
              </Suspense>
          <Footer/>
        </BrowserRouter>
        </RecoilRoot>
    </div>
  )
}

const Header = ()=>{
  const navigation = useNavigate();
  return(
    <div>

      <div className="header" >
        <ul className='services'>
          <li onClick={()=>navigation('/')}>Home</li>
          <li onClick={()=>navigation('/followers')}>Followers</li>
          <li onClick={()=>navigation('/repo')}>Repo</li>
          <li onClick={()=>navigation('/details')}>All Services</li>
        </ul>
      </div>
    </div>
  )
}

const Footer = ()=>{
  return(
    <div>

        <div className='footer'>
          <ul className='handles'>
            <li>Github</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
          </ul>
          <p>&copy; All right reserved</p>
        </div>

    </div>
  )
}