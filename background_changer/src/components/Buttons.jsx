import React from 'react'
import '../App.css'
import { useRecoilState } from 'recoil'
import { colorsAtom } from './Atoms'

export default function Buttons(){
    // const colors = useRecoilState(colorsAtom);
    

    return(
        <div className='container'>
        <div className='btns-container'>
            <button className='btns' onClick>Red</button>
            <button className='btns'>Yellow</button>
            <button className='btns'>Black</button>
            <button className='btns'>Purple</button>
            <button className='btns'>Green</button>
            <button className='btns'>Blue</button>
            <button className='btns'>Default</button>

         
        </div>
        </div>
    )
}