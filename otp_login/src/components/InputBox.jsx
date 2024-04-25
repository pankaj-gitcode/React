import React, { useEffect, useState } from "react";
import '../App.css'
import { useRecoilState, useRecoilValue } from "recoil";
import { OTPSelector, inputBoxAtom, inputValAtom, maxLengthAtom } from "./Atom";

export default function InputBox(){
    const inputID = useRecoilValue(inputBoxAtom);
    const maxLength = useRecoilValue(maxLengthAtom);
    const [inputValue, setInputvalue] = useRecoilState(inputValAtom)
    const OTP = useRecoilValue(OTPSelector);
    const [match, setMatch] = useState('');

    useEffect(()=>{
        console.log('id=0:', inputID[0])
        document.getElementById(inputID[0].id).focus()
    }, [])

    const OTPMatch = (...args)=>{
        
        const OTPArry = [args]
        JSON.stringify(OTPArry)
        console.log(`OTPArry: ${args}, ${OTPArry}`)
        const otpString = OTPArry.join('');


        if(otpString === OTP){
            return setMatch('OTP Successful')
        }

    }

    const inputHandler = (elemID)=>{
        const value = document.getElementById(elemID).value;
        setInputvalue(value)
        console.log("User entered: ",value,inputValue)
        const otpArry = []
        otpArry.push(value)
        console.log(`otpArry: ${otpArry}`)
        OTPMatch(otpArry);

        if(value.length < maxLength){document.getElementById(elemID).focus()}
        //use find() method to get focus on next inputbox
        const nextInputBox = inputID.find((elem)=>{
            return document.getElementById(elem.id).value.length < maxLength
        })
        console.log('nextInputBox:', nextInputBox) //to check {id:?} when ran find()
        if(nextInputBox){
            document.getElementById(nextInputBox.id).focus() //move to next empty inputBo 
        }

    }

    return(
        <div>
            {
             inputID.map((elem,i)=>
                <input type="text" key={i} placeholder='Enter OTP' maxLength={maxLength}
                    id={elem.id}
                    onKeyUp={()=>inputHandler(elem.id)}
                    // value={inputValue}
                />
             )   
            }
            <button onClick={OTPMatch}>Submit</button>
            <p>InputValue👉🏻 {inputValue}</p>
            <h5><i>OTP Status: {match}</i></h5>
        </div>
    )
}