import React, { useEffect, useMemo, useState } from 'react'
import './App.css'

export default function App(){
  const [exchange1Data, setExchange1Data] = useState(0);
  const [exchange2Data, setExchange2Data] = useState(0);
  const [bankData, setBankData] = useState(0);
 
  // useEffect handeling exchangeDatas & bank data
  useEffect(()=>{setExchange1Data(100); console.log("UE-1")}, []);
  useEffect(()=>{setExchange2Data(100); console.log("UE-2")}, []);
  useEffect(()=>{setTimeout(()=>{setBankData(100); console.log("SetTimeout")}, 5000)}, []);

  //counter button section
  const [counter, setCounter] = useState(0);
  const counterFunc = ()=>setCounter(counter=>counter+1);

  console.log("Render-1")

  //useMemo: memoise the total tax everytime counter button clicked with increase in counter
  const tax = useMemo(()=>{
    const totalExchangeData = exchange1Data + exchange2Data;
    return totalExchangeData;
  }, [counter,exchange1Data])

  const totalTax = ( tax + bankData ) * 0.3; //totalTax dependes on tax which uses useMemo()
  
  console.log("Render-2")

  return(
    <div>
      <p>Total Tax is: {totalTax}</p>
      <button onClick={counterFunc}>Counter</button>
      {console.log("Render-3")}
    </div>
  )
}
