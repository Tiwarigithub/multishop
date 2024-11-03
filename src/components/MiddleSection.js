import React from 'react'
import "./MiddleSection.css";

function MiddleSection() {
  return (
   <>
    <div className="middle-section">
  <h2 className="section-title">Shop with MultiShop</h2>
  {/* Grocery Section */}
  <div className="item-section grocery-section">
    <h3>Grocery Items</h3>
    <div className="item-cards">
      <div className="item-card">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.N0SN4GT8V5XSkzHE7StPjwHaEZ&pid=Api&P=0&h=180"
          alt="Grocery Item 1"
        />
        <h4>Fresh Vegetables</h4>
        <p>Quality guaranteed, directly from farms.</p>
        <button className="buy-button">Buy Now</button>
      </div>
      <div className="item-card">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.AikYXRl-CNkXj_1PRARTDQHaEJ&pid=Api&P=0&h=180"
          alt="Grocery Item 2"
        />
        <h4>Kitchen Essentials</h4>
        <p>Discover cooking essentials, rooted in the earth for a fresh and flavorful kitchen experience.</p>
        <button className="buy-button">Buy Now</button>
      </div>
      <div className="item-card">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.DZKoVBLQeDHTN-d51VHYcgHaE8&pid=Api&P=0&h=180"
          alt="Grocery Item 3"
        />
        <h4>Nuts and Dried Fruits</h4>
        <p>Elevate your snacking game with nature’s best!</p>
        <button className="buy-button">Buy Now</button>
      </div>
      <div className="item-card">
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.2AQLy6qQomSgjUEJch-EFAHaE8&pid=Api&P=0&h=180"
          alt="Grocery Item 4"
        />
        <h4>White Rice</h4>
        <p>Elevate your dishes with the classic taste of white rice!</p>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  </div>
  {/* Food Delivery Section */}
  <div className="item-section food-section">
    <h3>Food Delivery</h3>
    <div className="item-cards">
      <div className="item-card">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.BEH8rpIxoiUt_AQDRmSYTAHaFY&pid=Api&P=0&h=180"
          alt="Food Item 1"
        />
        <h4>Pizza Special</h4>
        <p>Delicious pizzas with a variety of toppings.</p>
        <button className="buy-button">Order Now</button>
      </div>
      <div className="item-card">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.fSirpT6kvWVZadG8Q20s7QHaE_&pid=Api&P=0&h=180"
          alt="Food Item 2"
        />
        <h4>Burger Combo</h4>
        <p>Your favorite comfort meal, perfected with every bite!.</p>
        <button className="buy-button">Order Now</button>
      </div>
      <div className="item-card">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.gHlKP9WChJxsKPwYdbc6dgHaFz&pid=Api&P=0&h=180"
          alt="Food Item 3"
        />
        <h4>Rice Pancake</h4>
        <p>Fluffy and golden, our rice pancakes are a treat for the senses!</p>
        <button className="buy-button">Order Now</button>
      </div>
      <div className="item-card">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.5bMTEuGsDH4844mfr-YPJgHaEp&pid=Api&P=0&h=180
           alt=Food Item 4"
        />
        <h4>Spring Rolls</h4>
        <p>Fresh ingredients rolled to perfection—experience the crunch of our spring rolls!</p>
        <button className="buy-button">Order Now</button>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default MiddleSection
