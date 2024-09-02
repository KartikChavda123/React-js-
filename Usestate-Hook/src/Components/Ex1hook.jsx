import React, { useState } from 'react'

function Ex1hook() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("KARTIK")
    const [arr,setarr] = useState([1,2,3, "KARTIK" , "CHAVDA" ,4,5])
    // const [arr2,setarr2] = useState([1,2,3,4,5,6,7,8,9,10])
    const [obj,setobj] = useState([{name: "KARTIK" , subject: "REACT.JS"}])
    const [arrobj,setarrobj] = useState([{name: "KARTIK" , subject: "NODE.JS"}])
    const increase = ()=>{
        setCount(count + 1)
    }
    const decrese = () =>{
        setCount(count - 1)
    }

  return (
    <div className='a1'>
        <h1>{count}</h1>
        <button onClick={increase}>increase</button>
        <br />
        <button onClick={decrese}>decrese</button>
        <h1>{name}</h1>
        {
            arr.map((e,i)=>{
                return <p key={i}>{e}</p>
            })
        }
        {/* {
            arr2.map((e,i)=>{
                return <p key={i}>{e}</p>
            })
        } */}

        <p>{obj.name}</p>
        <p>{obj.subject}</p>

        {
            arrobj.map((e,i)=>{
                return <ul key={i}>
                    <li>{e.name}</li>
                    <li>{e.subject}</li>
                </ul>
            })
        }
    </div>
  )
}

export default Ex1hook