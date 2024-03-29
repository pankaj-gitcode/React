import React from 'react'
import '../App.css'
import { useRecoilValue } from 'recoil'
import { gitInfoAtom } from './Atom'

export default function GitInfo({id}){
    const gitData = useRecoilValue(gitInfoAtom(id))
    return(
        <ul>
            <li>Login: {gitData.login}</li>
            <li>Id: {gitData.id}</li>
            <li>DP: {gitData.avatar_url}</li>
        </ul>
    )
}