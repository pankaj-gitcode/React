import {React, useState, useCallback, useEffect, useRef} from 'react'
import './App.css';
import PasswordGen from './component/PasswordGen';


export default function App(){
  const [color, setColor] = useState('#000');
  const [length, setLength] = useState(8);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const refPassword = useRef(null);
 

  // use useCallback() hook to generate passwords
  let generatePassword = useCallback(()=>{
    try{
      // create an empty variable to store the random value from for loop
      let pass = "";
      // declare a variable str to store chracters ,numbers
      let str = 
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      //when spcl.char. & Numbers checkboxes are checked(true) then add these chars & nums
      specialCharAllowed? str += "~!@#$%^&*(){}';:" : null; //since we don't have false stetment so given null
      numbersAllowed? str+= "0123456789" : null;

      //generate random numbers, chars on every iteration of length fixed by range bar
      for(let i=1; i<=length; i++){
        //below will generate number from the str whole length which is none other than Index
        let index = Math.floor(Math.random() * str.length);

        //store all chars from for loop on each iteration of length in a variable pass, chars in str on particular index-from above
        pass += str[index];

      }
      //now update the password in setPassword() method
      return setPassword(pass);
  }
  catch(error){console.error("SOmething went wrong",error);}

  }, [length, specialCharAllowed, numbersAllowed, password]);   
    
  //---------useEffect() hook to call password generator function to avoid re-recurrng & 
  //infinite loop-----------
  useEffect(()=>{
    generatePassword();
  }, [length, specialCharAllowed, numbersAllowed])

  //------- Select Password and copy to clipboard------
   let copyToClipBoard = useCallback(()=>{
    window.navigator.clipboard.writeText(password);
    refPassword.current?.select();
   }, [password])
  return(
    <>
      <
      PasswordGen  
      mainColor={color} 
      password={password}

      setlength={
        (e)=>{setLength(e.target.value)}
      } 
      len={length}

      setChar = {()=>setSpecialCharAllowed((prev)=>!prev)}
      defaultChecked={specialCharAllowed}

      numberChecked={numbersAllowed}
      setNumber = {()=>{setNumbersAllowed((prev)=>!prev)}}

      
      copytoClipBoard={copyToClipBoard}
      refPass = {refPassword}

      />
    </>
  )
}