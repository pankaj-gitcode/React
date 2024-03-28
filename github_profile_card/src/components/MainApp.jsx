import React from 'react'
import '../App.css'
import { useRecoilValue } from 'recoil'
import { infoAtom } from './Atom'

export default function MainApp({userId}){
    const info = useRecoilValue(infoAtom(userId));
    return(
        <div>
            <ul>
                <li>login: {info.login}</li>
                <li>Avatar: {info.avatar_url}</li>
                <li>following: {info.following}</li>
                {/* <li><img src={info.avatar_url} alt="GitDP" /></li> */}
            </ul>
        </div>
    )
}