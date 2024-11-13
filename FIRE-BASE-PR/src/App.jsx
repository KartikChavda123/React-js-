import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Components/Signup'
import Dashboard from './Components/Dashboard'
import SignIn from './Components/Singin'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
