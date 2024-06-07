import React, { useMemo, useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {  divSelector, mulSelector, num1Atom, num2Atom, subSelector, sumSelector } from "./Atoms";

const Preview = ()=>{
    const [num1, setNum1] = useRecoilState(num1Atom);
    const [num2, setNum2] = useRecoilState(num2Atom);
    const [cal, setCal] = useState();
    
    const sum = useRecoilValue(sumSelector);
    const sub = useRecoilValue(subSelector);
    const mul = useRecoilValue(mulSelector);
    const div = useRecoilValue(divSelector);

    const addFunc = ()=>{setCal(sum);};
    const subFunc = ()=>setCal(sub);
    const mulFunc = ()=>setCal(mul);
    const divFunc = ()=>setCal(div);

    return(
        <div>
            <button onClick={addFunc}>Add</button>
            <button onClick={subFunc}>Sub</button>
            <button onClick={mulFunc}>Mul</button>
            <button onClick={divFunc}>Div</button>
            <br/><br/>
        <label htmlFor="">

            <input type="number" value={num1} onChange={(e)=>setNum1(e.target.value)} /> + 
            <input type="number" value={num2} onChange={(e)=>setNum2(e.target.value)}/>=
            <input type="text" value={cal}/>
        </label>
        </div>
         
        
    )
}

export default Preview;