//use of memo(), comparing the result with prop as static value and another one with reference value from the function

import React, {memo, useState, useCallback} from 'react'
import './App.css'

export default function App(){
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //button function to re-render the counter and the components
  const counterFunc = ()=>{
    console.log("Button-1 re-rendering as well as Display-2 ")
    setCounter(counter=>counter+1)
  };
  const counter2Func = ()=>{console.log("Button-2 re-rendering but Display-2 not"); setCounter2(counter2=>counter2+1)}

  //For Display1&2 components
  const res = 100;
  const display2Val = useCallback(()=>{ //used useCallback, now Display-2 also not re-render unless dependency vary
    const val = 200;
    return val;
  }, [counter])

  return(
    <div>
      <button onClick={counterFunc}>Counter {counter}</button>
      <Display1 result = {res}/>
      <Display2 result= {display2Val} />
      <button onClick={counter2Func}>click & check if Display-2 is re-rendering or not</button>
    </div>
  )
}

//component-1: Display-1 [wont re-render]
const Display1 = memo( ({result})=>{
    console.log("Display-1 re-rendering");
    return(
      <div>Display-1 value is: {result}</div>
    )
  }
 )

//component-2: Display-2  [it'll re-render due to using reference value as declared in function display2Val()]
const Display2 = memo( ({result})=>{
  console.log("Display-2 re-rendering");
  return(
    <div>Display-2 value is: {result()}</div>
  )
}

)