import React, { useState } from 'react'
import '../App.css'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { colorsAtom } from './Atoms'

export default function Buttons(){
   const [colors, setColors] = useRecoilState(colorsAtom);
   

   const btnClass = document.querySelectorAll('.btns');

    Array.from(btnClass).forEach((e)=>{
        e.addEventListener('click', (elem)=>{
            const textElement = e.textContent.trim().toLowerCase();
            return document.body.style.backgroundColor = textElement;
        })
    })
   
   

    return(
        <div className='container'>
        <div className='btns-container'>
            <button className='btns' style={{backgroundColor: colors[0]}}>Red</button>
            <button className='btns' style={{backgroundColor: colors[1]}}>Yellow</button>
            <button className='btns' style={{backgroundColor: colors[2]}}>Black</button>
            <button className='btns' style={{backgroundColor: colors[3]}}>Purple</button>
            <button className='btns' style={{backgroundColor: colors[4]}}>Green</button>
            <button className='btns' style={{backgroundColor: colors[5]}}>Blue</button>
            <button className='btns' style={{backgroundColor: colors[6]}}>Default</button>

         
        </div>
        </div>
    )
}