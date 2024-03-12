import React from 'react'
import './App.css'
import Preview from './components/Preview'
import { RecoilRoot } from 'recoil'
import Buttons from './components/Buttons'

export default function App(){
  return(
    <div>
    <RecoilRoot>
      {/* <Buttons /> */}
      <Preview/>
    </RecoilRoot>
    </div>
  )
}