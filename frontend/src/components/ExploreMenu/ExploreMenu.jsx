import React from 'react'
import './ExploreMenu.css'
import { menu_list, food_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu' >
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Stop right here, just have a look at our menu, isn't that roll tempting enough? Don't worry we have more variety for you, what about chinese?? Ohh I see you want some Indian food, ummmm what about Pulao?? Explore more and have fun!!!! </p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name? "All":item.menu_name)} key = {index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p className={category===item.menu_name?"pactive":""} > {item.menu_name} </p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
