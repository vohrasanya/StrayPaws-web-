import './Vet.css';
import { StoreContext } from '../../context/StoreContext'
import PetItem from '../PetItem/PetItem'
import { assets } from '../../assets/assets'
import React, { useContext } from 'react'


const Vet = () => {
  return (
    <div className="vet-container">
      <section className="vet-intro">
        <div className="doctor-images">
          <img src="doctor1.jpg" alt="Doctor 1" />
          <img src="doctor2.jpg" alt="Doctor 2" />
          <img src="doctor3.jpg" alt="Doctor 3" />
        </div>
        <h2>Skip the Wait, Care Can’t Wait ! Secure Your Vet Appointment Online.</h2>
        <p>
        We simplify the complex world of pet care billing, ensuring you can focus on your furry friends while we handle payments quickly and hassle-free. Book your favorite vet near you and secure an appointment at your earliest convenience. Quality care for your furry companion is just a few clicks away!        </p>
        <button className="connect-btn">Let’s Connect</button>
      </section>

      <section className="vet-services">
        <div className="service">
          <h3>Find Doctor</h3>
          <p>For treatment when registering via the website</p>
          <a href="#find-doctor">→</a>
        </div>
        <div className="service">
          <h3>Free Consultation</h3>
          <p>For all types of Medical services available here</p>
          <a href="#free-consultation">→</a>
        </div>
        <div className="service">
          <h3>Get Your Solution</h3>
          <p>Here, we’ll assess, create a plan of care, and consult the best physician.</p>
          <a href="#get-solution">→</a>
        </div>
        
      </section>
      
    </div>
    
  );
};

export default Vet;
