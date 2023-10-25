import React, {useState} from 'react'
import UserContext from './Usercontext'


export default function UserContextProvider({children}){
    const [user, setUser] = useState(null)
    const [other, setOther] = useState(null)
   return(
    <UserContext.Provider value={{user, setUser, other, setOther}}>
        {children}
    </UserContext.Provider>
   )
}