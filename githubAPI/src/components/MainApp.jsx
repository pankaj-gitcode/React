import React, { Suspense, lazy } from 'react'
import  { Routes, Route, BrowserRouter, useNavigate} from 'react-router-dom'
import '../App.css'
// import Home from './Home';
// import About from './About';

const Home = lazy(()=>import('./Home'));
const About = lazy(()=>import('./About'));

export default function MainApp(){
    return(
        <div>
        <Suspense fallback={<p>Loading...</p>}>
            <BrowserRouter>
            <NavigationApp />
                    <Routes>
                        <Route path={'/home'} element={<Home />}/>
                        <Route path={'/about'} element={<About />}/>
                    </Routes>
                </BrowserRouter>
                <h1>Hello</h1>
        </Suspense>
            
        </div>
    )
}

const NavigationApp = ()=>{
    const navigation = useNavigate();
    return(
        <div>
            <ul>
                {/* <li><button onClick={()=>navigation('/home')}>Home</button></li>
                <li><button onClick={()=>navigation('/about')}>About</button></li> */}
                <li onClick={()=>navigation('/home')} className='li'>Home</li>
                <li onClick={()=>navigation('/about')} className='li'>About</li>
                {/* <li>About</li> */}
            </ul>
        </div>
    )
}