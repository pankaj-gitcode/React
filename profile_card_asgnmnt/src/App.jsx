import React from 'react'
import './App.css'
import Card from './components/Card'
import Info from './components/Info'

export default function App(){
  return(
    <div>
      <CardWrapper>
       <Card />
      </CardWrapper>
      <div style={{backgroundColor: 'black'}}><Info/></div>
      
    </div>
  )
}

//card wrapper component
const CardWrapper = ({children})=>{
  return(
    <div>
      <div className="cardwrapperParent">
    <div style={{backgroundColor: 'royalBlue'}} className='cardwrapper'>
      {children}
    </div>
      </div>
    </div>
  )
}

