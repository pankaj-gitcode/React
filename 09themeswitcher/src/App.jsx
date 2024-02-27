import { useState,useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './context/Theme'

function App() {
  const [themeMode, setThemeMode] = useState('dark');

  //methods
  const lightTheme = ()=>{setThemeMode('light')};
  const darkTheme = ()=>{setThemeMode('dark')};

  //add the effect on web page
  useEffect(()=>{
    // document.getElementById('main').classList.remove('dark', 'light');
    // document.getElementById('main').classList.add(themeMode);
    document.querySelector("#main").classList.remove('dark', 'light');
    document.querySelector("#main").classList.add(themeMode);
  }, [themeMode])

  return (
   <div className="light dark " id="main">

      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        <ThemeBtn/>
        <Card/>
      </ThemeProvider>
   </div>
  )
}

export default App
