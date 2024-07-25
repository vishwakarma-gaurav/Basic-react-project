import React from 'react'
import './Cards.css'
const Cards = ({name, description, image}) => {
  return (
    <div className="card">
        <img src={image} alt="" />
        <p> <span className='name'>{name}</span> <br /><span className='job'>{description}</span> </p>
    </div>
  );
}

export default Cards
