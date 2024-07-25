import React from 'react'
import './ScrollTop.css'
import {profile} from '../../../src/Components/Pics/Pics.js'
import Cards from './Cards.jsx'
const ScrollTop = () => {
  return (
    <>
    <div className='scroll-main'>
      <div className="scroll">
        {profile.map((item) => {
          return (
            <Cards name={item.name} description={item.dis} image={item.pp} />
          );
        })}
      </div>
    </div>
    <div className='bottom-text'>
      <p>Explore inspiring designs</p>
    </div>
    </>
  );
}

export default ScrollTop
