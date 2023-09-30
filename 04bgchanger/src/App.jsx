import {useState} from 'react'
import './App.css'

export default function App(){
  const [color, setColor] = useState('#b46767');
  const [switchvalue, setSwitchvalue] = useState('');

  // create function that disable the switch blurred effect & changes the bg color
  function bgColorChanger(id,color,switchvalue){
    //disable the blurred effect on 'ON' switch
    let onSwitch = document.getElementById(id);
    onSwitch.style.boxShadow = 'none';
    
    //enable the blurred effect on 'OFF' switch
    let offSwitch = document.getElementById(switchvalue);
    offSwitch.style.boxShadow = '0px -8px 2px 0px rgba(0,0,0,0.5)';

    //change the color
    let main = document.querySelector("#main");
    main.style.backgroundColor = setColor(color);
  }

  //create function for Off Switch, blurred effect off for OFF side and 'main div bg Color' changes to original one
  function offSwitch(id,switchvalue){
    //blur the OFF side 
    let offSide = document.getElementById(id);
    offSide.style.boxShadow = 'none';

    //change the 'main div box' bg Color
    let main = document.querySelector("#main");
    main.style.backgroundColor = setColor('#b46767');

    //enable the blurr effect on ON side of switch
    let onSide = document.getElementById(switchvalue);
    onSide.style.boxShadow = '0 8px 2px 0px rgba(0,0,0,0.5)';
  }
  return(
    <>

      <div id="main" style={{backgroundColor:color}}>

        <div id="container">

          <div className="box">
            <div className="off" id="off1" onClick={(e)=>offSwitch(e.target.id, 'turquoise')}>OFF</div>
            <div className="on" id="turquoise" onClick={(e)=>bgColorChanger(e.target.id,'#40E0D0', 'off1')}><span>ON</span></div>
          </div>

           <div className="box">
            <div className="off" id="off2" onClick={(e)=>offSwitch(e.target.id, 'sapphireBlue')}>OFF</div>
            <div className="on" id="sapphireBlue" onClick={(e)=>bgColorChanger(e.target.id,'#007FFF','off2')}><span>ON</span></div>
          </div>

          <div className="box">
            <div className="off" id="off3" onClick={(e)=>offSwitch(e.target.id, 'lavender')}>OFF</div>
            <div className="on" id="lavender" onClick={(e)=>bgColorChanger(e.target.id,'#E6E6FA','off3')}><span>ON</span></div>
          </div>

          <div className="box">
            <div className="off" id="off4" onClick={(e)=>offSwitch(e.target.id, 'crimson')}>OFF</div>
            <div className="on" id="crimson" onClick={(e)=>bgColorChanger(e.target.id,'#DC143C','off4')}><span>ON</span></div>
          </div>

          <div className="box">
            <div className="off" id="off5" onClick={(e)=>offSwitch(e.target.id, 'goldenrod')}>OFF</div>
            <div className="on" id="goldenrod" onClick={(e)=>bgColorChanger(e.target.id,'#DAA520','off5')}><span>ON</span></div>
          </div>

          <div className="box">
            <div className="off" id="off6" onClick={(e)=>offSwitch(e.target.id, 'emeraldGreen')}>OFF</div>
            <div className="on" id="emeraldGreen" onClick={(e)=>bgColorChanger(e.target.id,'#50C878','off6')}><span>ON</span></div>
          </div> 

        </div>



      </div>
    

    </>
  )
}