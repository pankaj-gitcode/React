//Use of UseEffect

import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

export default function App(){
  const [todoId, setTodoId] = useState(1);
  const changeTodoId1 = ()=>{setTodoId(1)}  
  const changeTodoId2 = ()=>{setTodoId(2)}  
  const changeTodoId3 = ()=>{setTodoId(3)}  
  return(
    <div>
      <button onClick={changeTodoId1}>1</button>
      <button onClick={changeTodoId2}>2</button>
      <button onClick={changeTodoId3}>3</button>
      <MainApp id={todoId}/>
    </div>
  )
}

//component: MainApp
const MainApp = ({id})=>{
  const [todo, setTodo] = useState([]);

  useEffect(()=>{
    const data = async ()=>{
      const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
      setTodo(res.data.todo);
    }
    data()
  }, [id])

  return(
    <div>
      <ul>
        <li>Id: {todo.id}</li>
        <li>Title: {todo.title}</li>
        <li>Description: {todo.description}</li>
      </ul>
    </div>
  )
}