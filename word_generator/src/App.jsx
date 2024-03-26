import React, { Suspense, lazy } from 'react'
import './App.css'
import { RecoilRoot } from 'recoil';

const Word = lazy(()=>import('./components/Word'));

export default function App(){
  return(
    <div>
        <Suspense fallback={'loading...'}>
      <RecoilRoot>
          <Word />
      </RecoilRoot>
        </Suspense>
    </div>
  )
}

