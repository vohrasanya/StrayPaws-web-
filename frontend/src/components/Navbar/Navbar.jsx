import './Navbar.css'
import { assets } from '../../assets/assets'
import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'


const Navbar = ({setShowLogin}) => {
  const [ menu,setMenu] = useState("home");

  const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

  const navigate = useNavigate();
  const logout = () =>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className ='navbar'>
      <Link to='./'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className='navbar-menu'>
      <Link to ="/"onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
      <Link to ='/rescue' onClick={()=>setMenu("rescue")} className={menu==="rescue"?"active":""}>rescue</Link>
      <Link to="/donate" onClick={() => setMenu("donate")} className={menu === "donate" ? "active" : ""}>donate</Link>
      <Link to="/vet" onClick={() => setMenu("vet")} className={menu === "vet" ? "active" : ""}>vet appointment</Link> 
      <Link to="/food&care" onClick={() => setMenu("food")} className={menu === "food" ? "active" : ""}>food & care</Link> 
      <a href ='#footer' onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>contact us</a>

      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
          <Link to ='./cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>:<div className='navbar-profile'>
          <img src={assets.profile_icon} alt=""/>
           <ul className="nav-profile-dropdown">
            <li><img src={assets.bag_icon} alt=""/><p>Orders</p></li>
            <hr/>
            <li onClick={logout}><img src={assets.logout_icon} alt=""/><p>Logout</p></li>
           </ul>

        </div> }
        </div>
    </div>
  )
}
export default Navbar;