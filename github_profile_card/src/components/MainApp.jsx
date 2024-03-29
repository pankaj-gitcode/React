import React, {lazy, Suspense} from 'react'
import '../App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import { inputAtom } from './Atom'
// import GitInfo from './GitInfo';


const GitInfo = lazy(()=>import('./GitInfo'));

export default function MainApp(){
    const inputId = useRecoilValue(inputAtom);
    return(
        <div>
                <InputBox />
        <Suspense fallback={'Loading...'}>

                <GitInfo id={inputId}/>
        </Suspense>
           
        </div>
    )
}

const InputBox = ()=>{
    const [userInput, setUserInput] = useRecoilState(inputAtom);
    return(
        <div>
            <input type="text" 
                placeholder='Enter git ID'
                value={userInput}
                onChange={(e)=>setUserInput(e.target.value)}
            />
        </div>
    )
}