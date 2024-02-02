// Create a component with a text input field and a button. When the component mounts or the button is clicked, 
// automatically focus the text input field using useRef.

import React, {useState, useRef, useEffect} from 'react'

export  function Assignment1(){
    const divRef = useRef();

    useEffect(()=>{
        divRef.current.focus();
    }, [])
    const handleButtonClick = ()=>{
        divRef.current.focus();
        console.log('hi')}
    return(
        <div>
            <input type='text' placeholder="Enter text here" ref={divRef}/>
            <button onClick={handleButtonClick}>Focus here</button>
        </div>
    )
}




