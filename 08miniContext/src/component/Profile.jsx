import React, {useContext} from 'react'
import UserContext from '../context/Usercontext'
import UserContextProvider from '../context/UserContextProvider'

export default function Profile(){
    const {user} = useContext(UserContext)
    if(!user) return <h5 id="no-login">User is Not Loggen In...</h5>
    return(
        <div className="profile">
            <h1>Profile: {user.username}</h1>
            
            <h1>Password:{user.password}</h1>
        </div>
    )
}