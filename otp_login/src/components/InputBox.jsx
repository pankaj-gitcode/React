import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import { inputIDAtom, inputValAtom, maxLengthAtom } from './Atom'

export default function InputBox(){
    const inputID = useRecoilValue(inputIDAtom)
    const [inputVal, setInputVal] = useRecoilState(inputValAtom);
    const maxLength = useRecoilValue(maxLengthAtom);

    const divref = useRef();
    

   

    useEffect(()=>{
        document.getElementById(`${inputID[0].id}`).focus()
        
        
        
    }, [])
    // for (let i=1; i<inputID.length;i++){
    //     if(document.getElementById(inputID[i].id).value.length < maxLength){
    //         document.getElementById(inputID[i].id).focus()
    //     }
    // }

    
    return(
        <div>
            
            {
                inputID.map((elem,i)=>
                <input type="text"  key={i}
                    placeholder='Enter OTP'
                    maxLength={maxLength} //to use in if condition
                    id={elem.id}
                    // value={inputVal}
                    onKeyUp={()=>
                        elem.func()
                    }
                    // ref={divref}
                />
                )
            }



             {/* <input type="text" placeholder='Enter Number here' maxLength='1' id={inputID[4]}
              value={inputVal} onKeyUp={handleInp5} ref={divref}/>   */}

             <button >Click</button>

            

            <p>{inputVal}</p>
        </div>
    )
}