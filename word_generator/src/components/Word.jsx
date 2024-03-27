

import React, { useState } from 'react'
import '../App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import { wordAtom, wordListAtom, wordNumAtom } from './Atoms'
export default function Word(){
    // const words = useRecoilValue(wordAtom);
    const [wordCount, setWordCount] = useRecoilState(wordNumAtom);
    const wordList = useRecoilValue(wordListAtom(wordCount))
    const [words, setWords] = useState();

    const generateWords = ()=>setWords(wordList.join(" "))

    return(
        <div className="container">
            <div className="words">
            <input type="number"  
                value={wordCount<=0?0:wordCount} onChange={(e)=>setWordCount(e.target.value)}
                placeholder='Enter number of words'
            /> 
            <button onClick={generateWords}>Generate</button>
            <p>Words are: {words}</p>
            </div>
        </div>
    )
}

