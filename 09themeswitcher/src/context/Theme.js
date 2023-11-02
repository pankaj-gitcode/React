import React, {createContext, useContext} from 'react'

//some default values
const ThemeContext = createContext({
    themeMode: 'light',
    lightTheme: ()=>{},
    darkTheme: ()=>{}
})

//create Provider to be used with App.jsx wrapper
export const ThemeProvider = ThemeContext.Provider

//custom hook to be used by all components that'll use variables/methods
export default function useTheme(){
    return useContext(ThemeContext)
}