import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreAdopt from '../../components/ExploreAdopt/ExploreAdopt'
import AnimalDisplay from '../../components/AnimalDisplay/AnimalDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

export const Home = () => {
  const [category,setCategory]= useState("All");
  return (
    <div>
      <Header/>
      <ExploreAdopt category ={category} setCategory={setCategory} />
      <AnimalDisplay category ={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
 