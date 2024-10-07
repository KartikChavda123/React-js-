import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Delete({ deta, setDeta }) {
    const navigate = useNavigate();
    const [id, setId] = useState("");

    const handelbtn = () => {
        navigate("/", { state: { name: "students" } })
    }

    const handelDelete = () => {
        let deleteitem = deta.filter((item) => item.id != id);
        setDeta(deleteitem);
        navigate("/")
    }
    return (
        <div>
    
            <h1>Delete</h1>
    
            <input type="text" placeholder='ENTER ID' onChange={(e) => setId(e.target.value)} />
    
            <button onClick={handelDelete}>Delete</button>
    
            <button onClick={handelbtn}>Go to home</button>
        </div>
    )
}
