import React from 'react'
import './Navbar.css'
import logo from '../../../src/logo.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="navigate">
            <ul>
                <li>FindDesigner</li>
                <li>Inspiration</li>
                <li>Jobs</li>
                <li>Go Pro</li>
            </ul>
        </div>
      </div>
      <div className="right">
        <div className="search">
            <input type="text" placeholder='Search'/>
        </div>
        <button className="login">LogIn</button>
        <button className="signup">Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
