import React, { useEffect } from 'react'
import './App.css'

export default function App(){
  useEffect(()=>{console.log("UE-1")}, []);
  useEffect(()=>{console.log("UE-2")}, []);
  useEffect(()=>{ setTimeout(()=>console.log("SeTimeout"),5000) }, []);
  console.log("After useEffect")
  return(
    <div>
      <h1>Hello {console.log("Hello is rendered...")}</h1>
    </div>
  )
}