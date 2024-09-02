import React from 'react'

export default function Footer() {
  return (
    <footer className="ft">
        <div className="d1">
            <p>ABOUT</p>
            <p>THE COMPANY</p>
            <p>FAQ</p>
            <p>PRIVACY POLICY</p>
        </div>
        <div className="d1">
            <p>LOCATIONS</p>
            <p>SAN FRANCISCO</p>
            <p>NEWPORT BEACH</p>
            <p>SUN CITY</p>
        </div>
        <div className="d1">
            <h2>FOLLOW ALONG</h2>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>

        </div>
    </footer>
  )
}