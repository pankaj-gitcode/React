import React from 'react';

export default function PasswordGen({mainColor="red", password, setlength, len, defaultChecked, setChar,
  numberChecked, setNumber, refPass, copytoClipBoard}){
    return(
        <div id="main" style={{backgroundColor:mainColor}}>
            <h1 id="app-name">Password Generator</h1>
            <div id="container">
                {/* Password, text-box, button div box */}
               <div className="box" id="box-top">
                    <label htmlFor="pass-textbox" id="title">Password</label>
                    <input type="text" id="pass-textbox" value={password} placeholder="Your Password" 
                    ref={refPass} readOnly/>
                    <button id="btn" onClick={copytoClipBoard}>Copy</button>
               </div>
               
               {/* range, checkboxes, labels div box */}
               <div className="box" id="box-bottom">
                <label htmlFor="range" id="length">Length:{len}</label>
                <input type="range" value={len} min={8} max={100} id="range" onChange={setlength}/>

                <input type="checkbox" id="char" value="checkbox" className="check"
                 defaultChecked={defaultChecked} onClick={setChar} />
                <label htmlFor="char" className="charNum">Special Characters</label>

                <input type="checkbox" value="checkbox" className="check" 
                 defaultChecked={numberChecked} onClick={setNumber} />
                <label htmlFor="num" className="charNum">Numbers</label>

               </div>
            
            </div>

        </div>
    )
}