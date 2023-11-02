import React from 'react'
import useTheme from '../context/Theme'

export default function ThemeBtn(){
    //use the values & methods from Theme.js context global object
    const {themeMode, lightTheme, darkTheme} = useTheme();

    const onChangeBtn = (e)=>{
        const themeModeStatus = e.currentTarget.checked;
        themeModeStatus? darkTheme():lightTheme();
    }
    return(
        <div className="themeBtn">
            <input 
            type="checkbox" 
            className="checkBox" 
            value = ''
            checked = {themeMode === 'dark'}
            onChange = {onChangeBtn}
            />
        </div>
    )
}