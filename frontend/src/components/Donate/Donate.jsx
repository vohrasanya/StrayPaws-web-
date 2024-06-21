import React from 'react'
import './Donate.css'
import Navbar from '../Navbar/Navbar';
import {useNavigate}  from 'react-router-dom'

const Donate = () => {
  const navigate = useNavigate();

  return (
    <div className="donate-page">
      <div className="donate-header text-center">
        <h1>One Eternal Child's life will be changed If you Make a Chance</h1>
        <button onClick={()=>navigate('/order')}>DONATE NOW</button>
      </div>

      <div className="about-us">
        <h2>About Us</h2>
        <p>Connects non-profits, donors, and businesses from all over the world.</p>
        <p>We have high hopes. We know how to address the problem, and with the support of volunteers, we are making progress every day. Donors can give with confidence, knowing that highly rated charities manage money efficiently and are accountable and transparent.</p>
        
        {/* <Row>
          <Col md={4} className="service-card">
            <h3>Adoption</h3>
            <p>Currently, all children whose developing certain natural talents were seen to be fully answered.</p>
          </Col>
          <Col md={4} className="service-card">
            <h3>Education</h3>
            <p>Education began in prehistory, as adults trained the young in the knowledge and skills.</p>
          </Col>
          <Col md={4} className="service-card">
            <h3>Help & Support</h3>
            <p>Individuals bring together to help those in need to stay healthy physically and mentally.</p>
          </Col>
        </Row> */}
      </div>
    </div>
  );
}

export default Donate