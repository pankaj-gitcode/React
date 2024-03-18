import React from 'react'
import '../App.css'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { colorsAtom } from './Atoms'

export default function Buttons(){
    const colors = useRecoilValue(colorsAtom);
   
    
    // iterate through all buttons w.r.t. colors Index
    const colorBtns = document.getElementsByClassName('btns');
    Array.from(colorBtns).forEach((e,i)=>{    //since colorBtns is nodeList so need to convert to Array
        if (e.textContext == 'default'){
            e.style.color = 'black';
            return e.style.backgroundColor = `${colors[Math.floor(Math.random()* (colors.length-1))]}`
        }
        else{
            return e.style.backgroundColor = `${colors[i]}`;
        }
    })

    return(
        <div className='container'>
        <div className='btns-container'>
            <button className='btns'>Red</button>
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