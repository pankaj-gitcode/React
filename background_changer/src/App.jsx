import React, { Suspense, lazy } from 'react'
import './App.css'
import { RecoilRoot } from 'recoil';

const Buttons = lazy(()=>import('./components/Buttons'));

export default function App(){

  return(
    <div>
      <Suspense fallback={'Loading...'}>

        <RecoilRoot>
          <Buttons />
        </RecoilRoot>

      </Suspense>
    </div>
  )
}