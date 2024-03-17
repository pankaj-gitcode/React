import React from 'react'
import '../App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { countAtom } from './Atoms'

export default function Card(){
    const count = useRecoilValue(countAtom);

    return(
        <div className={'mainBox'}>
            {/* container div */}
            <div className='container'>

                {/* top-container */}
                <div id='top-container'>
                    <img src="../../public/nerd.png" alt="codernerd"  className="nerdImg"/>
                </div>

                {/* middle container */}
                <div id="middle-container">
                    <h2>Coder Raj <span>32</span></h2>
                    <p className='para'>Nerd</p>
                </div>
                    <hr className="hr"/>
                {/* bottom-container */}
                <div id="bottom-container">
                    {/* handlers */}
                    <div className="handles">{count.followers}K</div>
                    <div className="handles">{count.likes}K</div>
                    <div className="handles">{count.photos<=999? count.photos : `${Math.floor(count.photos/1000)}k`}</div>
                    <div className="htitles">Followers</div>
                    <div className="htitles">Likes</div>
                    <div className="htitles">Photos</div>
                </div>
            </div>

            
        </div>
    )
}