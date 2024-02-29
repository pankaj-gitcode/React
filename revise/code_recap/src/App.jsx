// render the content on browser
// manually alter the exisiting content

//<---------- Using useEffet --------------->

import React, {useEffect, useState, useRef, useCallback} from 'react'
import './App.css'

export default function App(){
  const [name, setName] = useState('Raj');
  const nameRef = useRef();
  
  const renderCounter = useRef(0);
  renderCounter.current += 1;

  //conventional way, using useEffect and changing DOM manually
  useEffect(()=>{
    document.getElementById('city').innerHTML = `<h5>${name} is from Goa!</h5>`
  }, []);
  const changeInfo = ()=>{
    const info = nameRef.current.innerHTML = `<h3>${name} is 18 years</h3>`; //updating elements using userRef_variable.current
    setName(info)
    console.log(info, name)
  }


  return(
    <div>
      <button onClick={changeInfo}>Click to see next</button>
      <h5 ref={nameRef}>Hi there, this is &quot;{name}&quot;</h5>
      <h5 id="city">Which city ${name} belongs to!</h5>
      <h5>Number of renders: {renderCounter.current}</h5>
    </div>
  )
}