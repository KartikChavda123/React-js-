import React, { useContext } from 'react'
import { myContext } from './ComOne'
import ComThree from './ComThree'

export default function ComTwo() {
    const count = useContext(myContext)
    return (
        <div>
            <h1>ComTwo {count}</h1>
            <ComThree/>
        </div>
    )
}
