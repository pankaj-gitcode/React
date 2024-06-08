import React, {useState} from 'react'
import '../App.css'
import axios from 'axios'
import { useRecoilState, useRecoilValue } from 'recoil'
import { dataValAtom, gitUserNameAtom } from './Atom'

export default function MainApp(){

    const [gitUserName, setGitUserName] = useRecoilState(gitUserNameAtom);
    const [fetchAPIData,setFetchAPIData] = useRecoilState(dataValAtom); 

    const fetchData = ()=>{
        const response = axios.get(`https://api.github.com/users/${gitUserName}`)
        .then(res=>setFetchAPIData(JSON.stringify(res.data)))
        
    }

    return(<>

        <div className='mainAppDiv'>
           <input type="text" className="inputBox" 
            value={gitUserName}
            onChange={(e)=>setGitUserName(e.target.value)}
           />
           <button onClick={fetchData}>Click</button> 
           <p>Data is: {fetchAPIData}</p>
        </div>
    </>
    )
}