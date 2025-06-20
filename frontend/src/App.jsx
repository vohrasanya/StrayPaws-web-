import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Rescue from './components/Rescue/Rescue'
import Donate from './components/Donate/Donate'
import Donatepay from './components/Donate/Donatepay'
import Vet from './components/Vet/Vet'
import FoodCare from './components/FoodCare/FoodCare'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'


const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin ={setShowLogin} />:<></>}
    <div className='app'>
      <Navbar setShowLogin ={setShowLogin}/>
        <Routes>
        <Route path ='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/order' element={<PlaceOrder/>}></Route>
        <Route path='/rescue' element={<Rescue/>}></Route>
        <Route path='/donate' element={<Donate/>}></Route>
        <Route path='/vet' element={<Vet/>}></Route>
        <Route path='/food&care' element={<FoodCare/>}></Route>
        <Route path='/donatepay' element={<Donatepay/>}></Route>
      </Routes> 
    </div>
    <Footer/>
    </>
  )
}

export default App


