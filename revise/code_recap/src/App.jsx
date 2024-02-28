//use of memo(), comparing the result with prop as static value and another one with reference value from the function

import React, {memo, useState} from 'react'
import './App.css'

export default function App(){
  const [counter, setCounter] = useState(0);

  //button function to re-render the counter and the components
  const counterFunc = ()=>{
    console.log("Button re-rendering")
    setCounter(counter=>counter+1)
  };

  //For Display1&2 components
  const res = 100;
  const display2Val = ()=>{
    const val = 200;
    return val;
  }

  return(
    <div>
      <button onClick={counterFunc}>Counter {counter}</button>
      <Display1 result = {res}/>
      <Display2 result= {display2Val} />
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