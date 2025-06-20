import React, { useContext } from 'react'
import './Donatepay.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets';

export const Donatepay = () => {
  const { getTotalDonateAmount} = useContext(StoreContext);

  return (
    <form className='donate-pay'>
      <div className="donate-pay-left">
        <p className="title">Donor Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name'/>
          <input type='text' placeholder='Last name'/>
        </div>
        <input type='email' placeholder='Email address'/>
        <input type='text' placeholder='Street'/>
        <div className="multi-fields">
          <input type='text'placeholder='City'/>
          <input type='text' placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type='text'placeholder='Zip Code'/>
          <input type='text' placeholder='Country'/>
        </div>
        <input type='text' placeholder='Phone'/>
        <div className='amt' id='amt'>
        <input type='text' placeholder='Account Number'/>
        </div>
        
      </div>
      <div className="donate-pay-right">
        
        <h2>Total Donation</h2>
        <div className='donate-pay-amt' >
          <input type='text' placeholder=' Enter amount to donate'/>

        
      <button>PROCEED TO PAY</button>
      </div>
      <div className="donateimg">

      </div>
      {/* <div className="cart-total">
          <h2>Total Donation</h2>
          <div>
            <div className="cart-total-details">
                <p>Total</p>
                <p>₹{getTotalDonateAmount()}</p>
            </div>
            <hr />
          </div>
          <button>PROCEED TO PAY</button>

        </div> */} 
      </div>
    </form>
  )
}
export default Donatepay 