import React from 'react'
import './Navbar.css';
 const Navbar = () => {
  return (
    <div className="Navbar">
      <span className="nav-logo">IGSTUDIO</span>
<div className="nav-items">
   <a href='/home'>Home</a>
  <a href='/Attorneys'>Attorneys</a>
  <a href='/PracticeArea'>Practice Area</a>
  <a href='/about us'>About us</a> 
   
  <button className="button">
   Contact us
    </button>
</div>
</div>
  )
}

export default Navbar;