import React, { Suspense, lazy } from 'react'
import './App.css'
import { RecoilRoot } from 'recoil';

const Word = lazy(()=>import('./components/Word'));

export default function App(){
  return(
    <div>
      <RecoilRoot>
        <Suspense>
          <Word />
        </Suspense>
      </RecoilRoot>
    </div>
  )
}

