import React from 'react'
import '../App.css'
import { useRecoilValue } from 'recoil'
import { wordAtom } from './Atoms'

export default function App(){
    const words = useRecoilValue(wordAtom);
    return(
        <p>Words are: {}</p>
    )
}