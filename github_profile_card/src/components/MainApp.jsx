import React, { useEffect } from 'react'
import '../App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import { btnAtom, fetchAPIDataAtom, inputAtom } from './Atom'
import axios from 'axios';
import GitInfo from './GitInfo';

export default function MainApp(){
    const inputValue = useRecoilValue(inputAtom);

    //**uncomment below if don't want to call API from button, make sure to comment button API call**
    // const [fetchDataFromAPI, setFetchDataFromAPI] = useRecoilState(fetchAPIDataAtom);

    // useEffect(()=>{
    //     const getData = setTimeout(()=>{
    //         axios.get(`https://api.github.com/users/${inputValue}`)
    //         .then(response=>response.data)
    //         .then(data=>{console.log("API DATA:",data); setFetchDataFromAPI(data)})
    //     }, 1000)
    //     return ()=>clearTimeout(getData);

    // }, [inputValue])

    return(
        <div>
            <GitInfo/>
            <Button/>
            <Display/>
        </div>
    )
}

const Button = ()=>{
    const inputValue = useRecoilValue(inputAtom);
    const [fetchDataFromAPI, setFetchDataFromAPI] = useRecoilState(fetchAPIDataAtom);
    const [btnAPI, setBtnAPI] = useRecoilState(btnAtom);

    //API calling, fetch API Atom called and 'API data' used as an argument
    useEffect(()=>{

        const getData = setTimeout(()=>{
            axios.get(`https://api.github.com/users/${inputValue}`)
            .then(response=>response.data)
            .then(data=>{console.log(`BUTTON: ${data}`); setFetchDataFromAPI(data)})
        }, 10000)

        return ()=>clearTimeout(getData);

    }, [inputValue])

    //once button clicked, setBtnAPI() invoked [fetchDataFromAPI used an argument]
    const clickHandle = ()=>{
        const getData = setTimeout(()=>{
            setBtnAPI(fetchDataFromAPI)
        }, [2000])
    }

    return(
        <div>
            <button onClick={clickHandle}>Click</button>
        </div>
    )
}

const Display = ()=>{
    // const fetchAPIData = useRecoilValue(fetchAPIDataAtom);
    const fetchAPIData = useRecoilValue(btnAtom);
    
    
    return(
        <div>
            <ul>
                <li>Login: {fetchAPIData.login}</li>
                <li>ID: {fetchAPIData.id}</li>
                <li>DP: {fetchAPIData.avatar_url}</li>
                <li><img src={fetchAPIData.avatar_url} alt="" /></li>
            </ul>
        </div>
    )
}