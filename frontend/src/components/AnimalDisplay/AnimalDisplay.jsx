import React, { useContext } from 'react'
import './AnimalDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import PetItem from '../PetItem/PetItem'

const AnimalDisplay = ({category}) => {
    const{animal_list} = useContext(StoreContext)

  return (
    <div className='animal-display' id='animal-display'>
      <h2>Top pets near you</h2>
      <div className="animal-display-list">
        {animal_list.map((item,index)=>{
          if(category==="All"|| category===item.category){
            return <PetItem key={index} id ={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }
          

        })}
      </div>
    </div>
  )
}

export default AnimalDisplay