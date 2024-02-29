// how many times the page loads there should be Page-count displayed 
// if we don't remove strictMode in main.jsx then we've re-rendering 2 times where pageCount=2 [initial value]
// whereas if we remove React.StrictMode then we have pageCount=1 [initial value]
// means due to React.StrictMode we have one extra rendering

//but we can't remove Strict mode everytime, so we'll use 'useRef()'

import React, {useState, useRef} from 'react'
import './App.css'

let pageRender = 0;

export default function App(){
  const [count, setCount] = useState(0);
  const componentRender = useRef(0);
 console.log(JSON.stringify(componentRender))
  const counterFunc = ()=>{
    setCount(count=>count+1);
  }

  pageRender += 1; // with Strict Mode, so initial value=2
  componentRender.current += 1;  //with StrictMode, but used "useRef" so intial value=1

  return(
    <div>
      <button onClick={counterFunc}>Counter {count}</button>
      <p>Page Render {pageRender} times</p>
      <p>Component Rendered {componentRender.current} times</p>{console.log(JSON.stringify(componentRender))}
    </div>
  )
}