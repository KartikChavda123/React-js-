import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Create({ deta, setDeta }) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");

    const handelsubmit = () => {
        let obj = { id: deta.length + 1, name: name, subject: subject };
        setDeta([...deta, obj]);
        navigate("/");
    }

    const handelbtn = () => {
        navigate("/", { state: { name: "students" } });
    }

    return (
        <div className="create-container"> {/* Add class name for styling */}
            <h1>Create</h1>
            <input type="text" placeholder='ENTER THE NAME' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='ENTER THE SUBJECT' onChange={(e) => setSubject(e.target.value)} />
            <button onClick={handelsubmit}>Submit</button>
            <button onClick={handelbtn}>Go to home</button>
        </div>
    )
}
