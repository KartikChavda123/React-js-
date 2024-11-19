import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'


export default function Signin() {

   
    const [email, serEmail] = useState("")
    const [pass, serPass] = useState("")
    const [emailerr, setEmailerr] = useState('')
    const [passerr, setPasserr] = useState('')

    const navigate = useNavigate()

    const handleclick = () => {
        signInWithEmailAndPassword(auth, email, pass)
            .then(users => {
                navigate("/dashboard")
            })

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
    }
    return (
        <div className='s1_main2'>
            <h1 className='heading1' data-aos="fade-left">Sign in Form</h1>

            <div className="btns2">
                <button className='btn11'>
                    <Link className='link' to={"/"}>Sign Up</Link>
                </button>
                <button className='btn12'>
                    <Link className='link' to={"/signin"}>Sign In</Link>
                </button>
            </div>
            <br />
            <input className='inp2' value={email} type="text" placeholder='Enter email' onChange={(e) => serEmail(e.target.value)} />
            <p className='errmsg'>{emailerr}</p>
            <br />
            <input className='inp2' value={pass} type="text" placeholder='Enter pass' onChange={(e) => serPass(e.target.value)} />
            <p className='errmsg'>{passerr}</p>
            <br />
            <button className='btn21' onClick={handleclick}>Sign in</button>
            <br />
        </div>
    )
}
