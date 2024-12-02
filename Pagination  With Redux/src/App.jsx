import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Feature/Store'
import Home from './Redux/Home'
import Mens from './Redux/Mens'
import Electronic from './Redux/Electronic'
import Jewellary from './Redux/Jewellary'
import Women from './Redux/Women'


export default function App() {
  return (
    <div>
     

      <Provider store={store}>
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/women' element={<Women/>}></Route>
                <Route path='/men' element={<Mens/>}></Route>
                <Route path='/electronic' element={<Electronic/>}></Route>
                <Route path='/jewellary' element={<Jewellary/>}></Route>
            </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  )
}
