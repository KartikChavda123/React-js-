import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [city, setCity] = useState("");
  const [hobby, setHobby] = useState("");

  const [nameerr, setNameerr] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const [passerr, setPasserr] = useState("");
  const [cityerr, setCityerr] = useState("");
  const [hobbyerr, setHobbyerr] = useState("");

  const navigate = useNavigate();

  const handlesignup = () => {
    if (!name) setNameerr("*Enter name");
    else setNameerr("");

    if (!email) setEmailerr("*Enter email");
    else setEmailerr("");

    if (!pass) setPasserr("*Enter password");
    else setPasserr("");

    if (!city) setCityerr("*Enter city");
    else setCityerr("");

    if (!hobby) setHobbyerr("*Enter hobby");
    else setHobbyerr("");

    if (name && email && pass && city && hobby) {
      createUserWithEmailAndPassword(auth, email, pass)
        .then((data) => {
          setDoc(doc(db, "users", data.user.uid), {
            name,
            email,
            city,
            hobby,
          });
          navigate("/dashboard");
        })
        .catch((error) => {
          console.error("Error during signup:", error);
        });
    }
  };

  return (
    <div className="signup-container">
      <h1 className="heading">Sign Up Form</h1>
      <div className="navigation">
        <button className="nav-btn">
          <Link className="link" to={"/"}>
            Home
          </Link>
        </button>
        <button className="nav-btn">
          <Link className="link" to={"/signin"}>
            Sign In
          </Link>
        </button>
      </div>
      <div className="form-group">
        <input
          className="form-input"
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <p className="error-msg">{nameerr}</p>
      </div>
      <div className="form-group">
        <input
          className="form-input"
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error-msg">{emailerr}</p>
      </div>
      <div className="form-group">
        <input
          className="form-input"
          type="password"
          value={pass}
          placeholder="Enter Password"
          onChange={(e) => setPass(e.target.value)}
        />
        <p className="error-msg">{passerr}</p>
      </div>
      <div className="form-group">
        <input
          className="form-input"
          type="text"
          value={city}
          placeholder="Enter City"
          onChange={(e) => setCity(e.target.value)}
        />
        <p className="error-msg">{cityerr}</p>
      </div>
      <div className="form-group">
        <input
          className="form-input"
          type="text"
          value={hobby}
          placeholder="Enter Hobby"
          onChange={(e) => setHobby(e.target.value)}
        />
        <p className="error-msg">{hobbyerr}</p>
      </div>
      <button className="submit-btn" onClick={handlesignup}>
        Sign Up
      </button>
    </div>
  );
}
