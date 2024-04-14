import React from 'react'
import '../App.css'
import { useRecoilValue } from 'recoil'
import { gitAPIAtom } from './Atom'

export default function GitInfo({id}){
    const gitAPI = useRecoilValue(gitAPIAtom(id))
    if(!gitAPI) return <div>Loading...</div>
    return(
        <div>
            <ul>
                {/* <li>{JSON.stringify(gitAPI)}</li> */}
                <li>ID: {gitAPI.id}</li>
                <li>Login: {gitAPI.login}</li>
                <li>Profile Picture: {gitAPI.avatar_url}</li>
            </ul>
        </div>
    )
}
