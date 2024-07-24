import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { CartContext } from '../../context/CartContext'

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home")
  const {getTotalCartAmount} = useContext(StoreContext)
  // const [cartActive, setCartActive] = useState(false);

  const {cartActive, setCartActive} =useContext(CartContext)

  return (
    <div className='navbar '>
          {cartActive 
          ?
          <>
          <Link to='/'>
          <img onClick={()=>{setCartActive(false)}} src={assets.logo} alt="" className='logo' />
          </Link>
          <div className='navbar-right'>
            <img src={assets.search_icon} alt="" />
            <div className='navbar-search-icon'>
                <Link to='/cart'>
                  <img onClick={()=>{setCartActive(true)}} src={assets.basket_icon} alt="" />
                </Link>
                <div className={getTotalCartAmount()===0?"": "dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)} >Sign in</button>
          </div>
          </> 
          :
          <>
          <Link to='/'>
          <img onClick={()=>{setCartActive(false)}} src={assets.logo} alt="" className='logo' />
          </Link>
          <ul className='navbar-menu'>
          <Link onClick={()=>setMenu("home")} className={menu === "home"? "active" : ""}>home</Link>
            <a href='#explore-menu' onClick={()=>{setMenu("menu"), setCartActive(false)}} className={menu === "menu" ? "active" : ""}>menu</a>
            <a href='#app-download' onClick={()=>{setMenu("mobile-app"),setCartActive(false)}} className={menu === "mobile-app"?"active" :""}>mobile-app</a>
            <a href='#footer' onClick={()=>{setMenu("contact"), setCartActive(false)}} className={menu === "contact" ? "active" : ""}>contact us</a>         
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt="" />
            <div className='navbar-search-icon'>
                <Link to='/cart'>
                  <img onClick={()=>{setCartActive(true)}} src={assets.basket_icon} alt="" />
                </Link>
                <div className={getTotalCartAmount()===0?"": "dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)} >Sign in</button>
          </div>
          </>
          }
    </div>
  )
}

export default Navbar
