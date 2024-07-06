import React from 'react'
import './FoodHeader.css'

const FoodHeader = () => {
  return (
    <div className='food-header'>
      <div className="food-header-contents">
        <h2>Be The Fastest In <br/> Delivery Your <span className='highlight'>Food</span></h2>
        <p>Nourishing Your Pets with the Best</p>
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default FoodHeader
