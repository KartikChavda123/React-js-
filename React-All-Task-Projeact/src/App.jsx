import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Feature/Store'
import Home from './Redux/Home'
import Mens from './Redux/Mens'
import Electronic from './Redux/Electronic'
import MensShoes from './Redux/MensShoes'
import Watch from './Redux/Watch'


export default function App() {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Watch' element={<Watch/>}></Route>
                <Route path='/men' element={<Mens/>}></Route>
                <Route path='/electronic' element={<Electronic/>}></Route>
                <Route path='/mensshoes' element={<MensShoes/>}></Route>
            </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  )
}
