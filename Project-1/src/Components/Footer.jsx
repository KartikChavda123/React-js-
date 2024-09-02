import React from 'react'

export default function Footer() {
  return (
    <footer className="ft" style={{ marginTop: "120px" }}>
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
        <div className='q1'>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </footer>
  )
}