import React, { useEffect } from 'react'
import '../App.css'
import GitInfo from './GitInfo'
import { useRecoilState, useRecoilValue } from 'recoil'
import { fetchAPIDataAtom, inputAtom } from './Atom'
import axios from 'axios'

export default function MainApp(){
    const inputValue = useRecoilValue(inputAtom);
    const [fetchAPIData, setFetchAPIData] = useRecoilState(fetchAPIDataAtom);

    useEffect(()=>{
        
        const getData = setTimeout(()=>{
            axios.get(`https://api.github.com/users/${inputValue}`)
            .then(response=>response.data)
            .then(data=>{console.log("FetchAPI:", data);setFetchAPIData(data)})
        }, 800)

        return ()=>clearTimeout(getData)
        

    }, [inputValue])


    return(
        <div>
            <GitInfo/>
            <Display/>
        </div>
    )
}



const Display = ()=>{
        const apiData = useRecoilValue(fetchAPIDataAtom)
    return(
        <div>
            <ul>
                <li>Login: {apiData.login}</li>
                <li>ID: {apiData.id}</li>
                <li>Image: {apiData.avatar_url}</li>
                <li><img src={apiData.avatar_url} alt="GIT User DP" /></li>
            </ul>
        </div>
    )
}
