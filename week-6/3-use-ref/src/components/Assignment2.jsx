// Create a component that tracks and displays the number of times it has been rendered. 
// Use useRef to create a variable that persists across renders without causing additional renders when it changes.

import React, {useRef, useState} from 'react'

export function Assignment2(){
    const [count, setCount] = useState(0);
    const reRenderTimes = useRef(0); //when page loads @ intial render the value starts from 1 not 2
    const clickHandle = ()=>{
        setCount(count=>count+1);
    }
    reRenderTimes.current += 1;
    return(
        <div>
            {/* reRenderTImes = 2times @ 1st render/pageload due to <React.StrictMode> */}
            <p>This component has rendered {count} {reRenderTimes.current} times</p> 
            <button onClick={clickHandle}>Force Re-render</button>
        </div>
    )
}