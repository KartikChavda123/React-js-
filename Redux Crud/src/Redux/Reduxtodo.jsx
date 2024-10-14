import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData } from '../feature/TodoSlice'

export default function ReduxTodo() {
    const [name, setname] = useState("")
    const [sub, setsub] = useState("")

    const count = useSelector((state) => {
        return state.todokey
    })
    const dispatch = useDispatch();

    const addRecord = () => {
        dispatch(addData({ id: Date.now(), name, sub }))
        setname("")
        setsub("")
    }

    const deleteRecord = (id) => {
        dispatch(deleteData(id))
    }


    return (
        <div>
            <h1>ReduxTodo</h1>

            <input type="text" placeholder='name' value={name} onChange={(e) => setname(e.target.value)} />
            <input type="text" placeholder='subject' value={sub} onChange={(e) => setsub(e.target.value)} />
            <button onClick={addRecord}>Add data</button>

            {
                count ?
                    count.Students.map((e, i) => {
                        return <ul key={i}>
                            <li>{e.id}</li>
                            <li>{e.name}</li>
                            <li>{e.sub}</li>
                            <button onClick={() => deleteRecord(e.id)}>Delete</button>
                        </ul>
                    })

            :
            <p>NO Data</p>
                }
        </div>
    )
}