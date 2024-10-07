import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Update({ deta, setDeta }) {

  const [id, setId] = useState("");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [editIndex, seteditIndex] = useState("");

  const handleEdit = () => {
    let editdeta = deta.find((item) => item.id == id)
    setName(editdeta.name)
    setSubject(editdeta.subject)
    seteditIndex(editdeta.id)
  }

  const handleUpdate = () => {

    if (editIndex) {  
      const updateddeta = deta.map((item) => item.id === editIndex ? { ...item, name, subject } : item)

      setDeta(updateddeta)
      localStorage.setItem("deta1", JSON.stringify(updateddeta))
    }
    navigate("/")
  }

  return (
    <div className="home-container">

      <input type="text" placeholder='Enter ID' onChange={(e) => setId(e.target.value)} />
      <button onClick={handleEdit} className="nav-link">Edit</button>


      <input type="text" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder='Enter subject' value={subject} onChange={(e) => setSubject(e.target.value)} />

      <button onClick={handleUpdate} className="nav-link">Update</button>

    </div>
  )
}