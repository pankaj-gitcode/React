import React from 'react'
import './App.css'
import MainApp from './components/MainApp'

export default function App(){
  return(
    <div>
      <CardWrapper>
        <h1>This is CARD!</h1>
        <MainApp/>
      </CardWrapper>
      
    </div>
  )
}

const CardWrapper = ({children})=>{
  return(<>

    <div className='children'>
      {children}
    </div>

    <div className='children-2'>
      This is DIV-2
    </div>
  </>
  )
}