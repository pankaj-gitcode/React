//.mainAppDiv & .inputBox
import React, { useEffect, useState } from 'react'
import '../App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import {APIDataAtom, userInputAtom} from './Atom'
import axios from 'axios'

export default function MainApp(){

    return(
        <>
            <InputBox />
            <DataFetch/>
        </>
    )
}

const InputBox = ()=>{
    const [userId, setUserId] = useRecoilState(userInputAtom);
    return(
        <>
            <div className="mainAppDiv">
                <input type="text" className="inputBox" 
                    placeholder='Enter Git User-Id'
                    value={userId}
                    onChange={(e)=>setUserId(e.target.value)}
                />
                <button className="btn">Click</button>
            </div>
        </>
    )
}

const DataFetch = ()=>{
    const userId = useRecoilValue(userInputAtom);
    const [APIData, setAPIData] = useRecoilState(APIDataAtom)
    //fetch data - debounce
    useEffect(()=>{
        const getData = setTimeout(()=>{
            axios.get(`https://api.github.com/users/${userId}`)
            .then(res=>{console.log(`DATA is: ${JSON.stringify(res.data)}`);setAPIData(res.data);return res.data})
            // .then((data)=>{
            //     console.log(`Data is: ${JSON.stringify(data)}`);
            //     setAPIData(data)
            // })
        }, 2000)
        return ()=>clearTimeout(getData)
    }, [userId])
    return(
        <>
            <div className="dataFetch">
                {/* <p>Data is: {APIData}</p> */}
                <h1>ID: {APIData.id}</h1>
            </div>
        </>
    )
}
