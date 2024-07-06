import './Navbar.css'
import { assets } from '../../assets/assets'
import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'


const Navbar = ({setShowLogin}) => {
  const [ menu,setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className ='navbar'>
      <Link to='./'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className='navbar-menu'>
      <Link to ="/"onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
      <a href ='#explore-adopt' onClick={()=>setMenu("adopt")} className={menu==="adopt"?"active":""}>adopt</a>
      <Link to="/donate" onClick={() => setMenu("donate")} className={menu === "donate" ? "active" : ""}>donate</Link>
      <Link to="/food&care" onClick={() => setMenu("food")} className={menu === "food" ? "active" : ""}>food & care</Link> 
      <a href ='#footer' onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>contact us</a>

      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
          <Link to ='./cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}
export default Navbar;