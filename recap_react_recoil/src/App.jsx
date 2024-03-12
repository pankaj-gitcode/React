import React from "react";
import './App.css'
import {RecoilRoot, useRecoilValue} from 'recoil'
import { todoAtom } from "./components/Atoms";
import { useState } from "react";
import { useMemo } from "react";

export default function App(){
  const [num, setNum] = useState(1);
  const valNum = useMemo(()=>{
    return num <= 10? num: setNum(1);
  }, [num])
  return(
    <div>
    <input type="number" value={num} onChange={(e)=>setNum(e.target.value)} />
    
      <RecoilRoot>
      {console.log(valNum)}
        <TodoApp id={valNum}/>
      </RecoilRoot>
    </div>
  )
}

const TodoApp = ({id})=>{
  const todo = useRecoilValue(todoAtom(id))

  return(
    <div>
      <h5>ID: {todo.id}</h5>
      <h5>Title: {todo.title}</h5>
      <h5>Description: {todo.description}</h5>
    </div>
  )
}