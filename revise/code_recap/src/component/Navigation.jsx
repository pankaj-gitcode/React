import React from 'react'

export const Navigation = ()=>{

    const landingFunc = ()=>window.location.href='/landing';
    const dashboardFunc = ()=>window.location.href='/dashboard';
    const homeFunc = ()=>window.location.href='/';

    return(
        <div>
            <button onClick={landingFunc}>Landing Page {console.log("Navigation Page")}</button>
            <button onClick={dashboardFunc}>Dashboard Page {console.log("Navigation Page")}</button>
            <button onClick={homeFunc}>Home Page {console.log("Navigation Page")}</button>
        </div>
    )
}

