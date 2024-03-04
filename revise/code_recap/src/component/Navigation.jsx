import React from 'react'

export const Navigation = ()=>{

    const landingFunc = ()=>window.location.href='/landing';
    const dashboardFunc = ()=>window.location.href='/dashboard';
    const homeFunc = ()=>window.location.href='/';

    return(
        <div>
            <button onClick={landingFunc}>Landing Page</button>
            <button onClick={dashboardFunc}>Dashboard Page</button>
            <button onClick={homeFunc}>Home Page</button>
        </div>
    )
}

