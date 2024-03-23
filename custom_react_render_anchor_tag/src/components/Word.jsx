// https://random-word-api.herokuapp.com/word?number=10

import React from 'react'
import '../App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import { wordAtom, wordListAtom, wordNumAtom } from './Atoms'

export default function Word(){
    const words = useRecoilValue(wordAtom);
    const [wordCount, setWordCount] = useRecoilState(wordNumAtom);
    const wordList = useRecoilValue(wordListAtom(wordCount))

    return(
        <div>
            <input type="text" placeholder='Enter number of words' 
                value={wordCount<=0?0:wordCount} onChange={(e)=>setWordCount(e.target.value)}
            />
            <p>Words are: {wordList.join(",")}</p>
        </div>
    )
}

