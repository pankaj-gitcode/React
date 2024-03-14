import React, { Suspense, lazy } from "react";
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom, todoAtom } from "./Atoms";

const Home = lazy(()=>import('./components/Home'));
const Jobs = lazy(()=>import('./components/Jobs'));
const Messaging = lazy(()=>import('./components/Messaging'));
const Network = lazy(()=>import('./components/Network'));
const Notification = lazy(()=>import('./components/Notifications'));


export default function App(){
  return(
    <div>
      <div style={{backgroundColor:'RoyalBlue'}}>Header</div>
      <BrowserRouter>
        <div style={{height:'20vh'}}><NavigateBtn /></div>
        <Suspense fallback={'Loading...'}>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/Jobs'} element={<Jobs />}/>
            <Route path={'/message'} element={<Messaging/>}/>
            <Route path={'/network'} element={<Network/>}/>
            <Route path={'/notification'} element={<Notification/>}/>
          </Routes>
          <RecoilRoot>
            <MainApp />
          </RecoilRoot>
        </Suspense>
      </BrowserRouter>
      <div style={{backgroundColor:'RoyalBlue'}}>Footer</div>
    </div>
  )
}

//buttons component
const NavigateBtn = ()=>{
  const nav = useNavigate();
  return(
    <div>
      <button onClick={()=>nav('/')}>Home</button>
      <button onClick={()=>nav('/jobs')}>Jobs</button>
      <button onClick={()=>nav('/message')}>Messaging</button>
      <button onClick={()=>nav('/network')}>Network</button>
      <button onClick={()=>nav('/notification')}>Notifications</button>
    </div>
  )
}

//mainApp component for todo component
const MainApp = ()=>{
  const [count, setCount] = useRecoilState(countAtom);

  return(
    <div>
      <button onClick={()=>setCount(count=>count+1)}>Change Id {count}</button>
      {count <=0 || count >5? setCount(1): <TodoApp id={count}/>}
      {/* <TodoApp id={1}/> */}
    </div>
  )
}


//todo component
const TodoApp = ({id})=>{
  const todo = useRecoilValue(todoAtom(id));
  return(
    <div>
      <ul>
        <li>Id: {todo.id}</li>
        <li>Title: {todo.title}</li>
        <li>Description: {todo.description}</li>
        <li>Complete: {todo.complete}</li>
      </ul>
    </div>
  )
}