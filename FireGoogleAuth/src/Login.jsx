import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../firebaseConfig';


export default function Login() {
  const handellogin = async () => {
    await signInWithPopup(auth, provider).then((user) => {
      console.log(user);
    });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <button onClick={handellogin}>Login</button>
    </div>
  );
}
