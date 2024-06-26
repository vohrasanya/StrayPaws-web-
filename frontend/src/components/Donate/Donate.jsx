import React , {useState} from 'react'
import './Donate.css'
import Navbar from '../Navbar/Navbar';
import {useNavigate}  from 'react-router-dom'
import stray_paws_vid from '../../assets/stray_paws_vid.mp4'; // Corrected import for video file
import { assets } from '../../assets/assets';



const Donate = () => {
  const navigate = useNavigate();
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  return (
    <div>
    <div className="donate-page">
      <div className="donate-header">
    
        <h2>Save the paws</h2>
        <p>Connects non-profits, donors, and businesses from all over the world.</p>
        <p>We have high hopes. We know how to address the problem, and with the support of volunteers, we are making progress every day. Donors can give with confidence, knowing that highly rated charities manage money efficiently and are accountable and transparent.</p>
        <button onClick={()=>navigate('/donatepay')}>DONATE NOW ❤️</button>
      </div>
      
    </div>
    <div className="statistics-container">
      <div className="statistics-header">
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">Project Complate</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">359+</span>
          <span className="stat-label">Trusted Global Partners</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">428+</span>
          <span className="stat-label">24/7 Active Volunteer</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">67+</span>
          <span className="stat-label">Awards Winning</span>
        </div>
      </div>
      <div className="statistics-content">
        <h2>When People Help People Change Happens</h2>
        <p>With a mission to promote responsible pet ownership and support animal welfare initiatives, Stray Paws is a vital tool for anyone looking to make a positive impact in the lives of animals in need.</p>
        <div className="images-container">
          <img src="street_dog1.webp" alt="Image 1" className="stat-image" />
          <img src="street_dog2.webp" alt="Image 2" className="stat-image" />
          <img src="street_dog3.jpg" alt='Image 3' className='stat-image'/>
          <img src="street_dog4.jpg" alt='Image 4' className='stat-image'/>
          <img src="street_dog5.webp" alt='Image 5' className='stat-image'/>
          <img src="street_dog6.jpg" alt='Image 6' className='stat-image'/>
          <img src="street_dog7.webp" alt='Image 7' className='stat-image'/>

        </div>
        <div className="encouragement-text">
          <h3>Offering Encouragement</h3>
          <p>
          With transparent, trackable system where donors can see the impact of their contributions, ensuring funds are used effectively for medical care, food, and other essentials. By integrating social sharing features, Stray Paws also helps raise awareness and encourages more people to contribute to the cause. Additionally, Stray Paws provides resources on pet care, fostering, and volunteering, empowering users to get involved in multiple ways. Through streamlined donations and comprehensive support, Stray Paws enhances the overall network of care, making a significant difference in the lives of dogs in need.
          </p>
        </div>
      </div>
    </div>
    <div className="video-container">
      <h1>Our contribution</h1>
      <video className="video-player" controls
        onClick={togglePlay}
        onMouseEnter={() => setPlaying(true)} // Optional: Play on hover
        onMouseLeave={() => setPlaying(false)} // Optional: Pause on hover out
      >
        <source src={stray_paws_vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
    </div> 
    <div className="volunteer-section">
      <h2>Meet Our Volunteers</h2>
      <p>We curate the best of best talent around the globe to provide services to our stray paws . </p>
      <div className="volunteer-cards">
        <div className="volunteer-card">
          <img src="volunteer2.jpg" alt="Ashley Jean" />
          <h3>Chaavi Tripathi</h3>
          <p>VOLUNTEER</p>
          {/* <div className="social-icons">
            <a href="#"><img src={assets.facebook_icon}/></a>
            <a href="#"><img src={assets.twitter_icon}/></a>
            <a href="#"><img src={assets.linkedin_icon}/></a>
          </div> */}
        </div>
        <div className="volunteer-card">
          <img src="volunteer3.jpg" alt="Ashley Jean" />
          <h3>Akshay Sinha</h3>
          <p>VOLUNTEER</p>
          {/* <div className="social-icons">
            <a href="#"><img src={assets.facebook_icon}/></a>
            <a href="#"><img src={assets.twitter_icon}/></a>
            <a href="#"><img src={assets.linkedin_icon}/></a>
          </div> */}
        </div>
        <div className="volunteer-card">
          <img src="volunteer1.jpg" alt="Ashley Jean" />
          <h3>Anu Kapoor</h3>
          <p>VOLUNTEER</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
       {/*  <div className="volunteer-card">
          <img src="volunteer4.jpg" alt="Ashley Jean" />
          <h3>Ashley Jean</h3>
          <p>CEO, ENVATO</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div> */}
        <div className="volunteer-cta">
          <h3>Want To Become A Volunteer?</h3>
          <p>Join us to collaborate with the best of talent to provide servics Volunteer your heart, impact lives...</p>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
    </div>
    
    
  );
};


export default Donate