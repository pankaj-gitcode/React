import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black');
  const [length, setLength]  = useState(8);
  const [specialchar, setSpecialchar] = useState(false);
  const [numberSelected, setNumberSelected] = useState(false);
  const [password, setPassword] = useState("");

  // create a password generator using useCallback()
  let passwordGenerator = useCallback(()=>{
    try{

      //take an empty variable to store password
    let pass = "";

    //variable that stores char, strings & numbers
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    //condition to check if char is checked or numbers is checked-ternary operator used
    numberSelected? str += "123456789" : null;
    //if special character is checked
    specialchar? str += "~!@#$%^&*(){}[];''" : null;

    //depends on the toggle length(hooks we took already) set we need to select random words 
    // for passwords
    for (let i=1; i<= length; i++){
        let index = Math.floor(Math.random()* str.length);
        pass += str[index];
        // pass += str.charAt(index);
    }
    //in hooks declaration variable password useState value is empty
    //to make readonly we need to pass "pass" in setPassword() method
    setPassword(pass);

    }
    catch(error){
      console.error(`Error generating password:`, error);
    }                      

  }, [length, specialchar, numberSelected, setPassword]);

  //invoke the above function:issue is re-rendering takes in infinite loop, so use useEffect() hook
  
  useEffect(()=>{
    passwordGenerator();
  }, [length, specialchar, numberSelected]);

  return (
    <>
     <div id="main" style={{backgroundColor:color}}>

      <div id="container">
        {/* **************box-top*************** */}
        <div className="box">
          <label htmlFor="pass" id="pass-label">Password</label>
          <input type="text" value={password}  placeholder="Your Password" id="pass" readOnly/>
          <button id="btn">Copy</button>
        </div>

        {/* ***************box-bottom************* */}
        <div className="box" id="box-bottom">
          <label htmlFor="len" id="len-word">Length:{length}</label>
          <input type="range" min={8} max={100} value={length} id="len" onChange={(e)=>{setLength(e.target.value)}}/>

          {/* use defaultChecked attribute and onChange to change the events */}
          <input type="checkbox" className="check-box" 
          defaultChecked={numberSelected} onChange={()=>{setNumberSelected((prev)=>!prev)}} />
          <label htmlFor="char" className="box-bottom-label">Character</label>

          {/* use defaultCheked & onChange to change the events take place */}
          <input type="checkbox" className="check-box" 
            defaultChecked={specialchar} onChange={()=>{setSpecialchar((prev)=>!prev)}}
          />
          <label htmlFor="num" className="box-bottom-label">Numbers</label>
        </div>
      </div>



     </div>
    </>
  )
}

export default App
