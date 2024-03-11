import React, {useState} from "react";

export default function Preview(){
    const [check, setCheck] = useState(false);
    const [msg, setMsg] = useState("Hello, **world**!");

    
    return(
        <div>
            <input type="textbox" placeholder='Enter your text here' 
            value={msg} 
            onChange={(e)=>setMsg(e.target.value)}
            />

             <br/>
            <label htmlFor="">
                <input type="checkbox" checked={check} onChange={(e)=>setCheck(e.target.checked)} />
                Show Preview
            </label>
            <hr/>
            {check? <p><strong>{msg}</strong></p>:null}
            

        </div>
    )
}