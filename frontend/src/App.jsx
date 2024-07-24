import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlacedOrder from './pages/Placedorder/PlacedOrder.jsx'
import Footer from './components/Footer/Footer.jsx'
import LogInPopUp from './components/LoginPopUp/LogInPopUp.jsx'
import BackToTopButton from './BackToTopButton.jsx'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LogInPopUp setShowLogin={setShowLogin} />:<></>}
      <div className="app">
        <Navbar setShowLogin = {setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlacedOrder />} />
        </Routes>
      </div>
      <BackToTopButton/>
      <Footer />
    </>
  );
}

export default App
