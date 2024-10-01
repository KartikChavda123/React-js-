import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate()

    const handelbtn = () => {
        navigate("/")
    }

    return (
        <div>
            <h1>About</h1>
            <button onClick={handelbtn}>Go to home</button>
            <Link to={'/'}>Home</Link>
            <Link to={'/Contact'}>Contact</Link>
        </div>
    )
}
