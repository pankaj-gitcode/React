import React, {lazy, Suspense} from 'react'
import './App.css'
import { RecoilRoot } from 'recoil';

const MainApp = lazy(()=>import('./components/MainApp'));

export default function App(){
  return(
    <div>
      <Suspense>
        <RecoilRoot>
          <MainApp />
        </RecoilRoot>
      </Suspense>
    </div>
  )
}
