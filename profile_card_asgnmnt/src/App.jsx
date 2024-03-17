import React, { Suspense, lazy } from 'react'
import './App.css'
// import Card from './components/Card'
import {RecoilRoot} from 'recoil'
const Card = lazy(()=>import('./components/Card'))

export default function App(){
  return(
    <div>
      <CardWrapper>
        This is Card profiler
        <RecoilRoot>
      <Suspense fallback={'Loading...'}>

        <Card/>
      </Suspense>
  
        </RecoilRoot>
      </CardWrapper>
    </div>
  )
}

//cardwrapper component
const CardWrapper = ({children})=>{
  return(
    <div id='cardwrapper' >      
      {children}
    </div>
  )
}