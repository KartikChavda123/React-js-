import React from 'react'
import { useState } from 'react'

function Functionalcom() {
    const [count, setcount] = useState(0);
    const add = () =>{
        setcount(count + 1)
    }
  return (
    <div className='a2'>
        <h1>Functional Components</h1>
        <h1>{count}</h1>
        <button onClick={add}>click</button>
    </div>
  )
}

export default Functionalcom