import React, { useEffect, useRef, useState } from 'react'

function Pr3() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const nameInputRef = useRef(null)

    useEffect(() => {
        nameInputRef.current.focus();
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true);
        alert("FORM SUBMITED");
    }

    return (
        <>
            <div className='b1'>
                <form action="" className='b2' onSubmit={handleSubmit} autoComplete="off">
                    <p className='d4'>Log-in</p>

                    <label htmlFor="name" className='c5'>Name</label>
                    <input
                        type="text"
                        name="username" // Add unique name attribute
                        placeholder='ENTER YOUR NAME'
                        className='c4'
                        ref={nameInputRef}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="off"
                        autoCorrect="off" // Disable auto-correct
                        spellCheck="false"  // Disable spell-check
                    />

                    <label htmlFor="mobile" className='c6'>Mobile Number</label>
                    <input
                        type="number"
                        name="mobile" // Add unique name attribute
                        placeholder='ENTER YOUR MOBILE NUMBER'
                        className='c7'
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck="false"
                    />

                    <label htmlFor="email" className='c8'>Email</label>
                    <input
                        type="email"
                        name="useremail" // Add unique name attribute
                        placeholder='ENTER YOUR EMAIL'
                        className='c9'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck="false"
                    />

                    <label htmlFor="password" className='c10'>Password</label>
                    <input
                        type="password"
                        name="userpassword" // Add unique name attribute
                        placeholder='ENTER YOUR PASSWORD'
                        className='c11'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck="false"
                    />

                    <button className='c12'>Submit</button>

                    {submitted && (
                        <div className='d1'>
                            <center>
                                <h3 style={{ fontSize: "25px", color: "white" }} className='d2'>Form submitted</h3>
                                <br />
                                <p className='d3' style={{ color: "white", fontSize: "17px" }}>Name: {name}</p>
                                <p className='d3' style={{ color: "white", fontSize: "17px", marginTop: "7px" }}>Email: {email}</p>
                                <p className='d3' style={{ color: "white", fontSize: "17px", marginTop: "7px" }}>Password: {password}</p>
                            </center>
                        </div>
                    )}
                </form>
            </div>
        </>
    )
}

export default Pr3
