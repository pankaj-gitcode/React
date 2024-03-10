import React, {useState} from "react";

export function Preview(){
    const [check, setCheck] = useState(false);
    const [msg, setMsg] = useState();

    const checkFunc = ()=>{
         setMsg(
            <p>Preview</p>
         )
    }
    return(
        <div>
            <input type="textbox" placeholder='Enter your text here' /> <br/>
            <label htmlFor="">
                <input type="checkbox" checked={check} onChange={(e)=>setCheck(e.target.value)} />
                Show Preview
            </label>
            <hr/>
            {check? <p>Working</p>:null}
        </div>
    )
}