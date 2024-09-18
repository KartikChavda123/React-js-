import React, { useState } from 'react';

export default function SellerForm() {
    const [sellname, setSellname] = useState('');
    const [monumber, setMonumber] = useState('');
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('');

    const [sellnameErr, setSellnameErr] = useState('');
    const [monumberErr, setMonumberErr] = useState('');
    const [emailErr, setEmailErr] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!sellname) {
            setSellnameErr('Name Required');

        } else {
            setSellnameErr('');
            alert("Form Submited")
        }

        if (!monumber) {
            setMonumberErr('Mobile number Required');

        } else {
            setMonumberErr('');
            alert("Form Submited")
        }

        if (!email) {
            setEmailErr('Email Required');
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setEmailErr("Enter a valid email");
        }
        else {
            setEmailErr('');
            alert("Form Submited")
        }
    };

    return (
        <div className='form-container'>
            <form className='seller-form' onSubmit={handleSubmit}>
                <center>
                    <h1 style={{ marginTop: '-8px' }}>Seller Information</h1>
                </center>

                <div className='form-group'>
                    <label htmlFor='sellerName'>Seller Name</label>
                    <input type='text' placeholder='Enter Seller name' value={sellname} onChange={(e) => setSellname(e.target.value)} />
                    <span className='error'>{sellnameErr}</span>
                </div>

                <div className='form-group'>
                    <label htmlFor='mobileNo'>Mobile No</label>
                    <input type='number' placeholder='Enter Mobile Number' value={monumber} onChange={(e) => setMonumber(e.target.value)} />
                    <span className='error'>{monumberErr}</span>
                </div>

                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span className='error'>{emailErr}</span>
                </div>

                <div className='form-group'>
                    <label htmlFor='category'>Category</label>
                    <select name='category' id='category' onChange={(e) => setCategory(e.target.value)} value={category}>
                        <option value=''>Select Category</option>
                        <option value='mobile'>Mobile</option>
                        <option value='furniture'>Furniture</option>
                        <option value='accessories'>Accessories</option>
                        <option value='books'>Books</option>
                        <option value='clothes'>Clothes</option>
                    </select>
                </div>


                {category === 'mobile' && (
                    <>
                        <div className='form-group'>
                            <label htmlFor='brandName'>Brand Name</label>
                            <input type='text' placeholder='Enter Brand' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='modelNo'>Model No</label>
                            <input type='number' placeholder='Enter Model No' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='price'>Price</label>
                            <input type='number' placeholder='Enter Price' />
                        </div>
                    </>
                )}

                {category === 'furniture' && (
                    <>
                        <div className='form-group'>
                            <label htmlFor='woodName'>Wood Name</label>
                            <input type='text' placeholder='Enter Wood Name' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='dimensions'>Dimensions</label>
                            <input type='number' placeholder='Enter Dimensions' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='materialType'>Material Type</label>
                            <input type='text' placeholder='Enter Material Type' />
                        </div>
                    </>
                )}

                {category === 'accessories' && (
                    <>
                        <div className='form-group'>
                            <label htmlFor='brandName'>Brand Name</label>
                            <input type='text' placeholder='Enter Brand Name' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='coverPrice'>Mobile Cover Price</label>
                            <input type='number' placeholder='Enter Mobile Cover Price' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='headphonesPrice'>Headphones Price</label>
                            <input type='number' placeholder='Enter Headphones Price' />
                        </div>
                    </>
                )}

                {category === 'books' && (
                    <>
                        <div className='form-group'>
                            <label htmlFor='bookName'>Book Name</label>
                            <input type='text' placeholder='Enter Book Name' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='topicName'>Topic Name</label>
                            <input type='text' placeholder='Enter Topic Name' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='bookPrice'>Book Price</label>
                            <input type='number' placeholder='Enter Book Price' />
                        </div>
                    </>
                )}

                {category === 'clothes' && (
                    <>
                        <div className='form-group'>
                            <label htmlFor='brandName'>Brand Name</label>
                            <input type='text' placeholder='Enter Brand Name' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='size'>Size</label>
                            <input type='number' placeholder='Enter Size' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='price'>Price</label>
                            <input type='number' placeholder='Enter Price' />
                        </div>
                    </>
                )}

                <center>
                    <button type='submit' className='submit-btn'>
                        Submit
                    </button>
                </center>
            </form>
        </div>
    );
}
