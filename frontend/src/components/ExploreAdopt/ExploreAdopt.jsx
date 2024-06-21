import React from 'react'
import './ExploreAdopt.css'
import { pet_list } from '../../assets/assets'

const ExploreAdopt = ({category,setCategory}) => {
  return (

    <div className='explore-adopt' id='explore-adopt'> 
    <h1> Explore our Services</h1>
    <p className='explore-adopt-text'>Our dedicated team of experts offers a wide range of services, including veterinary care, grooming, training, and adoption support.</p>
    <div className="explore-pet-list"> 
        {pet_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.pet_name?"All":item.pet_name)}key={index} className="explore-pet-list-item">
                    <img className ={category===item.pet_name?"active":""}src={item.pet_image} alt=''/>
                    <p>{item.pet_name}</p>
                </div>

            )
        })}

    </div>
    <hr/>
    </div>
  )
}

export default ExploreAdopt