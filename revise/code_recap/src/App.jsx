// how many times the page loads there should be Page-count displayed 
let pageCount = 0;
import React, { useState } from 'react'
import './App.css'

export default function App(){
  const [count, setCount] = useState(0);

  const counterFunc = ()=>{
    setCount(count=>count+1);
  }

  pageCount += 1;

  return(
    <div>
      <button onClick={counterFunc}>Count {count}</button>
      <p>Page Count: {pageCount}</p>
    </div>
  )
}