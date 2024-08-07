import React ,{ useContext, useState } from 'react'
import './PetItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const PetItem = ({id,name,price,description,image}) => {
  
   const{cartItems, addToCart,removeFromCart,url}= useContext(StoreContext);

  return (
    <div className='pet-item'>
        <div className="pet-item-img-container">
            <img className='pet-item-image' src={url+"/images/"+image} alt="" />
            {
              !cartItems [id]
                 ?<img className ="add" onClick={()=>addToCart(id)}src={assets.add_icon_white} alt=''/>
                 :<div className='pet-item-counter'>
                    <img onClick={()=>removeFromCart(id)}src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                  </div>
            }
        </div>
        <div className='pet-item-info'>
        <div className='pet-item-name-rating'>
            <p>{name}</p>
            <img src={assets.rating_starts} alt=''/>
        </div>
        <p className='pet-item-desc'>{description}</p>
        <p className="pet-item-price">₹{price}</p>
        </div>

    </div>
  )
}

export default PetItem