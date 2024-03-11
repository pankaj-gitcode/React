import React, { Suspense, lazy } from 'react'
import './App.css'

// import { Preview } from './components/Preview'
const Preview = lazy(()=>delayDemo(import('./components/Preview')));


export default function App(){

  return(
    <div>
    <Suspense fallback={'Loading...'}>
      <Preview/>
    </Suspense>

    </div>
  )
}

const delayDemo = (prom)=>{
  return new Promise((resolve, reject)=>{
    return setTimeout(resolve(), 2000);
  })
  .then(value=>prom).catch(err=>console.log(err));
}