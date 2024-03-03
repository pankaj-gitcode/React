import React from "react";
import './App.css'
import {BrowserRouter, Route, Router} from 'react-router-dom'
import { Landing } from "./component/Landing";
import { Home } from "./component/Home";

export default function App(){
  return(
    <div>
      <BrowserRouter>
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={Landing} />
        </Router>
      </BrowserRouter>
    </div>
  )
}