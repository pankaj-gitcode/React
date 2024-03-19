import React from 'react'
import '../App.css'
import { useRecoilValue } from 'recoil'
import { colorAtom } from './Atoms';

export default function Buttons(){
    const colors = useRecoilValue(colorAtom);

    const bodyColrChanger = (color)=>{
        document.body.style.backgroundColor = color
    }

    return(
        <div className='container'>
            <div className='btn-container'>
            {/* create buttons mapping with {colors}  */}
            {
                colors.map((color, i)=>
                <button 
                key={i} 
                style={{backgroundColor: color, color: color=='black'?'white':'black'}}
                className='btns'
                onClick={()=>bodyColrChanger(color)}>{color}</button>)
            }
            </div>
        </div>
    )
}