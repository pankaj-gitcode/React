import React from 'react'
import './App.css'
import { RecoilRoot } from 'recoil'
import { Suspense } from 'react'
import { lazy } from 'react'

const InputBox = lazy(()=>import('./components/InputBox'));
const RandomCode = lazy(()=>import('./components/RandomCode'));

export default function App(){

  return(
    <RecoilRoot>
      <Suspense fallout={'Loading...'}>
        <InputBox />
        <RandomCode />
      </Suspense>
    </RecoilRoot>
  )
}
