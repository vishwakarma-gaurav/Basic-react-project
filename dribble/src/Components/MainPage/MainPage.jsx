import React from 'react'
import './MainPage.css'
import {design} from '../../Components/Pics/Pics.js'
import CardMainPage from './CardMainPage.jsx'
const MainPage = () => {
  return (
    <div className='main'>
      {design.map((item)=>{
        return(
          <CardMainPage image={item}/>
        );
      })}
    </div>
  )
}

export default MainPage
