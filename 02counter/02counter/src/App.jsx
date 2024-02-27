import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App(){
  //used useState() hook
let [counter , setCounter] = useState(15);

//create a fuction to increase the counter value
let addValue = ()=>{
  //condition to cehck if the counter value exceeds 20
  // if (counter >= 20) {
  //   setCounter(counter = 0)
  // }
  // else {
  //   setCounter (counter += 1)
  // }
  counter >= 20 ? setCounter(counter = 0) : setCounter(counter += 1);

  
}
//create a function to reduce the counter value
let reduceValue = ()=>{
  //condition to check if the counter value reduces to -ve value
  // if (counter <= 0){
  //   setCounter(counter = 20);
  // }
  // else{
  //   setCounter(counter -= 1);
  // }
  counter <= 0 ? setCounter(counter = 20) : setCounter(counter -= 1);
}
  
  return(
    <>
      <h1>Simple Counter Application</h1>
      <h2>Counter value = {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={reduceValue}>Reduce Value</button>
      <div>{counter}</div>
    </>
  )
}
