import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import { inputIDAtom, inputValAtom, maxLengthAtom } from './Atom'

export default function InputBox(){
    const inputID = useRecoilValue(inputIDAtom)
    const [inputVal, setInputVal] = useRecoilState(inputValAtom);
    const maxLength = useRecoilValue(maxLengthAtom);

    // const divref = useRef();

    useEffect(()=>{
        document.getElementById(`${inputID[0].id}`).focus()    
    }, [])
    
    const inputHandle = (eId)=>{
        document.getElementById(eId).value
        console.log(document.getElementById(eId).value, eId)

        if(document.getElementById(eId).value.length < maxLength){
            return document.getElementById(eId).focus()
        }
        //make use of find(), whereever value.length < maxlength focus() there
        const nextElement = inputID.find((elem)=>document.getElementById(elem.id).value.length<maxLength) 
        if(nextElement){
            document.getElementById(nextElement.id).focus()
        } 
        console.log("NextElement👉🏻",nextElement)      

    }
    
    return(
        <div>  
            {
                inputID.map((elem,i)=>
                <input type="text"  key={i}
                    placeholder='Enter OTP'
                    maxLength={maxLength} //to use in if condition
                    id={elem.id}
                    
                    onKeyUp={()=>inputHandle(elem.id)}
                />
                )
            }
             <button >Click</button>

            <p>{inputVal}</p>
        </div>
    )
}