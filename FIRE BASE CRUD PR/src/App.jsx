import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sighup from './Firebase/Sighup'
import Sighin from './Firebase/Sighin'
import Dashboard from './Firebase/Dashboard'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Sighup}></Route>
          <Route path='/signin' Component={Sighin}></Route>
          <Route path='/dashboard' Component={Dashboard}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}
