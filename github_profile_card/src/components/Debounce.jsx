import React from 'react'

export default function Debounce({func, delay}){

    //exisiting timeout ID
    let timeoutID;

    //function to return new timeout ID
    return function(...args){
        clearTimeout(timeoutID);
        timeoutID = setTimeout(()=>{
            //func function call in the current Execution Context
            func.apply(this, args);
        }, delay)
    }
}