import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header' id='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Got bored of ordinary food?? Dont worry we heard you feelings, thats why we came up with some of the best dishes for you, from cake to chinese food, we have it all, Just order now only on Tomato</p>
        <button><a href="#explore-menu">View menu</a></button>
      </div>
    </div>
  )
}

export default Header
