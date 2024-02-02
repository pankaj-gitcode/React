// Create a component that tracks and displays the number of times it has been rendered. 
// Use useRef to create a variable that persists across renders without causing additional renders when it changes.

import React, {useRef, useState} from 'react'
let reRenderTimes = 0;
export function Assignment2(){
    const [count, setCount] = useState(0);

    const clickHandle = ()=>{
        setCount(count=>count+1);
    }
    reRenderTimes += 1;
    return(
        <div>
            <p>This component has rendered {count} {reRenderTimes} times</p>
            <button onClick={clickHandle}>Force Re-render</button>
        </div>
    )
}