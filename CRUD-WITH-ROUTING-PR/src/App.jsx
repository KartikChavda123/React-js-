import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Create from './Components/Create';
import Delete from './Components/Delete';
import Update from './Components/Update'
import { useState } from 'react';
import './index.css'

function App() {
  const [deta,setDeta] = useState([
    {id: 1 , name: "Kartik" , subject: "React"},
    {id: 2 , name: "Khushal" , subject: "node.js"},
  ]);

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home deta={deta}/>}></Route>
          <Route path='/create' element={<Create deta={deta} setDeta={setDeta}/>}></Route>
          <Route path='/delete' element={<Delete deta={deta} setDeta={setDeta}/>}></Route>
          <Route path='/update' element={<Update deta={deta} setDeta={setDeta}/>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
