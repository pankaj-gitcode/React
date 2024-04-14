import React, {usecallback} from 'react'
import '../App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import { debounceAtom, gitAPIAtom, inputSearchAtom } from './Atom'
import GitInfo from './GitInfo'
// import Debounce from './Debounce'

export default function MainApp(){
    const inputSearchData = useRecoilValue(inputSearchAtom)
    const debouncedFunc = useRecoilValue(gitAPIAtom);

    
    return(
        <div>
            <InputData/>
            <GitInfo id={debouncedFunc?.login}/>
            {/* <Debounce func={gitAPIData} delay={3000}/> */}
        </div>
    )
}

//input element
const InputData = ()=>{
    const [inputSearchData, setInputSearchData] = useRecoilState(inputSearchAtom);
    const [debounceFunc] = useRecoilState();
    
    const debouncedFunc = useRecoilValue( usecallback(debounceFunc(gitAPIAtom, 300),[inputSearchData, gitAPIAtom]) )
    
    
    const handleDebounce = (e)=>{
        setInputSearchData(e.target.value);
        
    }

    return(
        <div>
            <input type="text"
            value={inputSearchData}
            onChange={handleDebounce}
             />
        </div>
    )
}

