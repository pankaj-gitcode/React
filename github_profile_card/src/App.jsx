import React, { Suspense, lazy, useState } from 'react'
import './App.css'
import {RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import { inputAtom } from './components/Atom';
import { Route, Routes, useNavigate } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const MainApp = lazy(()=>import('./components/MainApp'));

export default function App(){
  
  return(
    <div>
      <Suspense fallback={'Loading...'}>
        <RecoilRoot>
          <InputApp />
        </RecoilRoot>
      </Suspense>
    </div>
  )
}

//rendering MainApp
const InputApp = ()=>{
  const userName = useRecoilValue(inputAtom);
  return(
    <div>
      {/* <MainApp /> */}
      <Input />
      <p>{userName}</p>

      <BrowserRouter>
      <Button/>
        <Routes>
          <Route path={'/home'} element={<MainApp userId={userName}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

//Input component
const Input = ()=>{
  const [userName,setUserName] = useRecoilState(inputAtom);
  return(
    <div>
      <input type="text"
      placeholder="Enter github ID/username"
      value={userName}
      onChange={(e)=>setUserName(e.target.value)}
       />
    </div>
  )
}
//Navigation component
const Button = ()=>{
  const navigateToHome = useNavigate();
  return(
    <div>
      <button onClick={()=>navigateToHome('/home')}>Search</button>
    </div>
  )
}