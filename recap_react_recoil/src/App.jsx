import React from "react";
import './App.css'
import {RecoilRoot,useRecoilValue, useRecoilState} from 'recoil'
import { countAtom, todoAtom } from "./components/Atoms";

export default function App(){
  return(
    <div>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </div>
  )
}

const MainApp = ()=>{
  const [count, setCount] = useRecoilState(countAtom);
  return(
    <div>
      <button onClick={()=>setCount(count=>count+1)}>Increase {count}</button>
      { count <=10?  <TodoApp id={count} />: setCount(1)}

      <input type="number" value={count} onChange={(e)=>setCount(e.target.value)} />
      { 
       count >0 && count <=10? <TodoApp id={count}/> : setCount(1)
      }
      
    </div>
  )
}

const TodoApp = ({id})=>{
  const todo = useRecoilValue(todoAtom(id));
  return(
    <div>
      <h5>ID: {todo.id}</h5>
      <h5>Title: {todo.title}</h5>
      <h5>Description: {todo.description}</h5>
    </div>
  )
} 