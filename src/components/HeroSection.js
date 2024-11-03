import React from 'react'
import './HeroSection.css';

function HeroSection() {
  return (
    <>
        <div className="hero-section">
  <div className="welcome-section">
    <h1 className="welcome-heading">Welcome to your Multishop</h1>
    <img src="https://tse2.mm.bing.net/th?id=OIP.n0U6Utt7hCQnFuMfTrpVOgHaHa&pid=Api&P=0&h=180" width="3px" alt="Namaste Greeting" className="greet-image" />
  </div>
  <div className="carousel-container">
    <div className="carousel">
      <div className="carousel-slide">
        <img src="https://static.vecteezy.com/system/resources/previews/000/273/542/non_2x/online-food-order-concept-vector.jpg" alt="Grocery Items" className="carousel-image" />
      </div>
      <div className="carousel-slide">
        <img src="https://tse3.mm.bing.net/th?id=OIP.OTRQLiXmC_qjKmMuU80BfgHaDl&pid=Api&P=0&h=180" alt="Food Items" className="carousel-image" />
      </div>
    </div>
  </div>
</div>  
    </>
  )
}

export default HeroSection
