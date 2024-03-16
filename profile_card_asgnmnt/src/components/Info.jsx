import React from "react";
import '../App.css'

export default function Info(){

    return(
        <div>
            <div className="infoContainer">
                <h3>Raj 32</h3>
                <p>India</p>
                <hr/>
                <div className='handles'>
                    <div id="handleCount">
                        <h2>80K</h2>
                        <h2>803K</h2>
                        <h2>1.4K</h2>
                    </div>
                    <div id="handleNames">
                        <p>Followers</p>
                        <p>Likes</p>
                        <p>Photos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}