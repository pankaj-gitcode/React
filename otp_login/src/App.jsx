import React, { Suspense, lazy } from 'react'
import './App.css'
import { RecoilRoot } from 'recoil';

const InputBox = lazy(()=>import('./components/InputBox'));

export default function App(){
  return(
    <div>
    <RecoilRoot>
      <Suspense fallback={'Loading...'}>
        <InputBox />
      </Suspense>
    </RecoilRoot>
      
    </div>
  )
}