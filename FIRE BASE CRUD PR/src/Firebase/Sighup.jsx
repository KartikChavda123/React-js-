import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [city, setCity] = useState('')
    const [hobby, setHobby] = useState('')

    const [nameerr, setNameerr] = useState('')
    const [emailerr, setEmailerr] = useState('')
    const [passerr, setPasserr] = useState('')
    const [cityerr, setCityerr] = useState('')
    const [hobbyerr, setHobbyerr] = useState('')

    const navigate = useNavigate()

    const handlesignup = () => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then(data => {
                setDoc(doc(db, "users", data.user.uid), {
                    name, email, city, hobby
                })
                console.log("added");
                navigate("/dashboard");
            })
        if (!name) {
            setNameerr("*Enter name")
        }
        else {
            setNameerr("")
        }

        if (!email) {
            setEmailerr("*Enter email")
        }
        else {
            setEmailerr("")
        }

        if (!pass) {
            setPasserr("*Enter password")
        }
        else {
            setPasserr("")
        }

        if (!city) {
            setCityerr("*Enter city")
        }
        else {
            setCityerr("")
        }

        if (!hobby) {
            setHobbyerr("*Enter hobby")
        }
        else {
            setHobbyerr("")
        }

    }

    return (
        <div className='s1_main1'>
            <h1 className='heading'>Sign up Form</h1>
            <div className="btns">
                
            <button className='btn1'>
            <Link className='link' to={"/"}>Sign Up</Link>
            </button>
            
            <button className='btn'>
            <Link className='link' to={"/signin"}>Sign In</Link>
            </button>
            
            </div>
            <br />
            <input className='inp1' type="text" value={name} placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
            <p className='errmsg'>{nameerr}</p>

            <input className='inp1' type="text" value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
            <p className='errmsg'>{emailerr}</p>

            <input className='inp1' type="text" value={pass} placeholder='Enter Pass' onChange={(e) => setPass(e.target.value)} />
            <p className='errmsg'>{passerr}</p>
            
            <input className='inp1' type="text" value={hobby} placeholder='Enter Hobby' onChange={(e) => setHobby(e.target.value)} />
            <p className='errmsg'>{hobbyerr}</p>


            <button className='btn2' onClick={handlesignup}>Sign Up</button>
            <br />

        </div>
    )
}
