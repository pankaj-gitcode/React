import React, {useState, useContext} from 'react'
import UserContext from '../context/Usercontext'

export default function Login(){
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext);

   const handleSubmit = (e)=>{
    //prevent from default exection
    e.preventDefault();
    setUser({username, setUsername, password, setPassword})
   }

   return(
    <div className="login">
        <div id="logo">
           <p>Login</p>
           <img src="https://image.lexica.art/full_webp/ea9af507-d2d9-4ad7-9223-f4d3c3134d79" alt="" id="img" />
        </div>
        <input type="text" value={username} placeholder=" Username" onChange={(e)=>setUsername(e.target.value)} className="input"/>
        <input type="password" value={password} placeholder=" Password"  onChange={(e)=>setPassword(e.target.value)} className="input"/>

        <button onClick={handleSubmit}>Submit</button>
    </div>
   )
}