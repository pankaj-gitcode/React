import React from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import {countAtom, todoAtom} from './components/Atoms'

export default function App(){
  return(
    <div>
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
    </div>
  )
}

//component: render todoAtom 
const MainApp = ()=>{
  const [count, setCount] = useRecoilState(countAtom);
  return(
    <div>
      <button onClick={()=>setCount(count=>count+1)}>Click to see next Todo {count}</button>
      {/*  if count >= 10 then excute component<Todo with id={count}/> else set the count again from 1 */}
      {count<=10? <Todo id={count}/>:setCount(1)} 

      {/* //through INput */}
      <input type="number" value={count} onChange={(e)=>setCount(e.target.value)} />
      {count<=0 && count >=10? setCount(1): <Todo id={count}/>}
      
    </div>
  )
}

//component: render actual Todo here
const Todo = ({id})=>{
  const todo = useRecoilValue(todoAtom(id))
  return(
    <div>
      <h5>Id: {todo.id}</h5>
      <h5>Title: {todo.title}</h5>
      <h5>Description: {todo.description}</h5>
    </div>
  )
}