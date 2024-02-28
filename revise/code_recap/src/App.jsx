// use of useMemo()
// If I ask you to create an app that does two things -
// 1. Increases a counter by 1
// 2. Lets user put a value in an input box (n) and you need
// to show sum from 1-n
// One restriction - everything needs to be inside App()

import React, { useMemo, useState } from 'react'
import './App.css'

export default function App(){
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const res = useMemo(()=>{
    let sum = 0;
    for (let i=0; i<=number; i++){
      sum = sum+i;
    }
    return sum
  }, [count, number])

  const increaseCount = ()=>setCount(number=>number+1)

  return(
    <div>
      <input type="number" placeholder="Enter number to get sum from 1 to n" 
        value={number}
        onChange={(e)=>setNumber(e.target.value)}
      />
      <button onClick={increaseCount}>Counter ({count})</button>
      <p>Sum is: {res}</p>
    </div>
  )
}