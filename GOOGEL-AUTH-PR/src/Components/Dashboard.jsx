import React from "react";
import { useLocation } from "react-router-dom";

export default function UserDetails() {
    const location = useLocation();
    

    return (
        <div>
            <div className="login-container">
                <h1>Welcome</h1>
                <h1 id="h1">{location.state.name}!</h1>
                <p>Email: {location.state.email}</p>
                <img src={location.state.photo} style={{height:"200px",width:"200px"}}/>
            </div>
        </div>
    );
}