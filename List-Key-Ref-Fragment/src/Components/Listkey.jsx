import React from 'react'

function Listkey() {
    const arr = ["apple","banana", "graps","pinaple"]
  return (
    <div>
        {
            arr.map((e,i)=>{
                return <p key={i}>{e}</p>
            })
        }
    </div>
  )
}

export default Listkey