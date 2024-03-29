import React from 'react'
import './App.css'
import { RecoilRoot } from 'recoil';
import MainApp from './components/MainApp';

// const MainApp = lazy(()=>import('./components/MainApp'));


export default function App(){

  return(
    <div>
    
        <RecoilRoot>
          <MainApp />
        </RecoilRoot>
     
    </div>
  )
}
