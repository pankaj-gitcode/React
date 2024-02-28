// use of useMemo()
// If I ask you to create an app that does two things -
// 1. Increases a counter by 1
// 2. Lets user put a value in an input box (n) and you need
// to show sum from 1-n
// One restriction - everything needs to be inside App()

import React, { useEffect, useMemo, useState } from 'react'
import './App.css'

export default function App(){
  const [inputNum, setInputNum] = useState(0);
  const [countNum, setCountNum] = useState();

  const res = useMemo(()=>{
    let sum = 0;
    for (let i=0; i<=inputNum;i++){
      sum += i;
    }
    return sum;
  }, [inputNum]);

  
  const counterInc = ()=>{
    return setCountNum(res+1)
  };

  return(
    <div>
      <input type="number" 
      placeholder="Enter Your number to get sum from 1 to n" 
        value={inputNum}
        onChange={(e)=>setInputNum(e.target.value)}
      />

      <p>Sum is: {res}</p>
      <button onClick={counterInc}>Counter </button>
      <p>Counter sum is: {countNum}  👈🏽[Sum+1]</p>
    </div>
  )
}