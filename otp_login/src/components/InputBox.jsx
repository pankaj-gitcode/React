import React, { useEffect} from 'react'
import '../App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import { inputIDAtom, inputValAtom, maxLengthAtom } from './Atom'

export default function InputBox(){
    const inputID = useRecoilValue(inputIDAtom)
    const [inputVal, setInputVal] = useRecoilState(inputValAtom);//store the entered text in input box
    const maxLength = useRecoilValue(maxLengthAtom);

    //1st render the focus will be on 1st input box
    useEffect(()=>{
        document.getElementById(`${inputID[0].id}`).focus()    
    }, [])
    
    //function execute focus on input box when input box value is < maxLength and accordingly focus moves on next input box
    const inputHandle = (eId)=>{
        setInputVal(document.getElementById(eId).value)
        console.log(document.getElementById(eId).value, eId)
        //if input box value length < maxlength then remian focus there itself
        if(document.getElementById(eId).value.length < maxLength){
            return document.getElementById(eId).focus()
        }
        //else find the boxes whose inputBox.value length's < maxLength which'll be our next inputBox focus
        const nextElement = inputID.find((elem)=>document.getElementById(elem.id).value.length<maxLength) 
        if(nextElement){ 
            document.getElementById(nextElement.id).focus() //automatically move the corsor to next input box
        } 
        console.log("NextElement👉🏻",nextElement)      

    }
    
    return(
        <div>  
            {
                inputID.map((elem,i)=> //one input logic for all input boxes
                <input type="text"  key={i}
                    placeholder='Enter OTP'
                    maxLength={maxLength} //to use in if condition
                    id={elem.id}
                    
                    onKeyUp={()=>inputHandle(elem.id)} //run this on everytime user enters text in input box
                />
                )
            }
             {/* <button >Click</button> */}

            <p>{inputVal}</p>
        </div>
    )
}