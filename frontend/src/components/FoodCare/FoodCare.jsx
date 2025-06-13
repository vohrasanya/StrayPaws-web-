import React, {useState} from 'react'
import FoodHeader from '../../components/Header/FoodHeader'
import './FoodCare.css'
import { assets } from '../../assets/assets'

function FoodCare() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      imgSrc : '/src/assets/pet_78.png',
      title:'Easy to Order',
      description:'Your only order through the app',
      price:'₹200.2'
    },
    {
      imgSrc : '/src/assets/pet_76.png',
      title:'Easy to Order',
      description:'Your only order through the app',
      price:'₹800.2'
    },
    {
      imgSrc : '/src/assets/pet_80.png',
      title:'Easy to Order',
      description:'Your only order through the app',
      price:'₹1000.2'
    },
    {
      imgSrc : '/src/assets/pet_78.png',
      title:'Easy to Order',
      description:'Your only order through the app',
      price:'₹230.2'
    },
    {
      imgSrc : '/src/assets/pet_76.png',
      title:'Easy to Order',
      description:'Your only order through the app',
      price:'₹400.2'
    },
    {
      imgSrc : '/src/assets/pet_80.png',
      title:'Easy to Order',
      description:'Your only order through the app',
      price:'₹600.2'
    }
  ];

  const feedbacks = [
    {
      name: 'Naura Silvana',
      image: '/src/assets/pet_1.png',
      rating: 5,
      text: 'Great experience every time I use this app. The delivery drivers are always polite, and the app keeps me updated with real-time tracking. I highly recommend it for quick and reliable service!',
    },
    {
      name: 'Azura',
      image: '/src/assets/pet_2.png',
      rating: 5,
      text: 'Very happy with this app. The user experience is fantastic, and I love the personalized recommendations based on my previous orders.',
    },
    {
      name: 'John Doe',
      image: '/src/assets/pet_3.png',
      rating: 4,
      text: 'I’m constantly impressed with the service. The food is always delivered promptly, and I’ve never had any issues with orders.',
    },
  ];
  const handlePrevClick = () =>{
    setCurrentIndex((prevIndex) => (prevIndex===0? cards.length - 3 : prevIndex -1));
  };
  const handleNextClick = () =>{
    setCurrentIndex((prevIndex) => (prevIndex=== cards.length - 3?0 : prevIndex +1));
  };

  const feedbackIndex = currentIndex % feedbacks.length;

  return (
    <div>
      <FoodHeader/>
      <div className="food-container">
        <h4>How it works</h4>
        <h2>What We Serve</h2>
        <p>Product Quality Is Our Priority, And Always Guarantees <br/> Taste And Safety Until It Is In Your Hands.</p>
        <div className="food-section">
          <div className="food-cards">

            <div className="food-card">
              <img src="order.png" alt="Ashley Jean" />
              <h3>Easy To Order</h3>
              <p>Your only oder through the app</p>
            </div>

            <div className="food-card">
              <img src="delivery-bike.png" alt="Ashley Jean" />
              <h3>Fastest Delivery</h3>
              <p>Delivery will be on time</p>
            </div>

            <div className="food-card">
              <img src="delivery-man.png" alt="Ashley Jean" />
              <h3>Best Quality</h3>
              <p>The best quality of food for you</p>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-container">
        <h4>Our Menu</h4>
        <h2>Our Popular Menu</h2>
        <p>Premium Nutrition for Your <br/> Furry Friends </p>

        <div className="menu-section">
          <button className="nav-button left" onClick={handlePrevClick}>&lt;</button>
          <div className="menu-cards">
            {cards.slice(currentIndex,currentIndex+3).map((card,index)=>(
              <div className= "menu-card" key={index}>
                  <div className="card-top">
                    <img src={card.imgSrc} alt={card.title} />
                  </div>

                  <div className="card-bottom">
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                        <div className="menu-card-details">
                          <span className="price">{card.price}</span>
                          <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" /> 
                        </div>
                  </div>
              </div>
            ))}  
          </div>  
            
          <button className="nav-button right" onClick={handleNextClick}>&gt;</button>

        </div>
          <button className='moremenu'>More Menu</button> 
      </div>
      <div className="feedback-container">
      <div className="feedback-header">
          <h4>What they say</h4>
          <h2>What Our Customers Say About Us</h2>
        </div>
        
        <div className="feedback-section">

        <button className="nav-button left" onClick={handlePrevClick}></button>
          <div className="feedback-images">
          <div className="feedback-image-large">
              <img src="/src/assets/pet_1.png" alt="Food 1" />
            </div>
            <div className="feedback-image-small">
              <img src="/src/assets/pet_2.png" alt="Food 2" />
              <img src="/src/assets/pet_3.png" alt="Food 3" />
            </div>
          </div>
          
          <div className="feedback-cards">
            {feedbacks.slice(currentIndex, currentIndex + 1).map((feedback, index) => (
              <div className="feedback-card" key={index}>
                <div className="feedback-content">
                  <div className="feedback-image">
                    <img src={feedback.image} alt={feedback.name} />
                  </div>
                  <h3>{feedback.name}</h3>
                  <div className="feedback-rating">
                    {'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}
                  </div>
                  <p>{feedback.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="nav-button right" onClick={handleNextClick}></button>
        </div>
      </div>
    </div>        
  );
}

export default FoodCare