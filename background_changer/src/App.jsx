import React, { Suspense, lazy } from 'react'
import './App.css'

const Buttons = lazy(()=>import('./components/Buttons'))

export default function App(){
  return(
    <div>
      <Suspense fallback={'Loading...'}>
      <Buttons/>
      </Suspense>
    </div>
  )
}