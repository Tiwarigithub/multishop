import React, { useState } from 'react';
import "./FoodItem.css";

const foodItems = [
  { id: 1, name: 'Pizza', price: 80, image: 'https://tse4.mm.bing.net/th?id=OIP.R9e99zUSFs4w-TKUw_1TdQHaE4&pid=Api&P=0&h=180' },
  { id: 2, name: 'Burger', price: 60, image: 'https://tse2.mm.bing.net/th?id=OIP.fSirpT6kvWVZadG8Q20s7QHaE_&pid=Api&P=0&h=180' },
  { id: 3, name: 'Pasta', price: 75, image: 'https://tse4.mm.bing.net/th?id=OIP.dJXRd-YM1toRB7KnZNgEKwHaE8&pid=Api&P=0&h=180' },
  { id: 4, name: 'Salad', price: 25, image: 'https://tse4.mm.bing.net/th?id=OIP.Ac0nJCY6jg5kVznR1WdmNgHaEz&pid=Api&P=0&h=180' },
  { id: 5, name: 'Sushi', price: 45, image: 'https://tse4.mm.bing.net/th?id=OIP.F2xqQ-Iy8lPqs4yuzG9AkAHaEK&pid=Api&P=0&h=180' },
  { id: 6, name: 'Tacos', price: 35, image: 'https://tse3.mm.bing.net/th?id=OIP.OwohLe9-1VUVPiNm1f5_4wHaEh&pid=Api&P=0&h=180' },
  { id: 7, name: 'Ice Cream', price: 40, image: 'https://tse3.mm.bing.net/th?id=OIP.Zfxe3TOvRyGWwy8N87Ah-QHaFC&pid=Api&P=0&h=180' },
  { id: 8, name: 'Steak', price: 30, image: 'https://tse4.mm.bing.net/th?id=OIP.LLRjCJnoC7JYIb1LY_TEhwHaFC&pid=Api&P=0&h=180' },
  { id: 9, name: 'Fries', price: 60, image: 'https://tse1.mm.bing.net/th?id=OIP.5AulawOCKXjXB8NwSh47sAHaFF&pid=Api&P=0&h=180' },
  { id: 10, name: 'Sandwich', price: 45, image: 'https://tse1.mm.bing.net/th?id=OIP.501qlwGml24rO06w6fw-JgHaFd&pid=Api&P=0&h=180' },
  { id: 11, name: 'Wrap', price: 65, image: 'https://tse2.mm.bing.net/th?id=OIP.V-lGdcRcvgAr5V-cVCw7rAHaFQ&pid=Api&P=0&h=180' },
  { id: 12, name: 'Donut', price: 40, image: 'https://tse2.mm.bing.net/th?id=OIP.AfgAxoXXDcvMVLpPqrsEIwHaF7&pid=Api&P=0&h=180' },
  { id: 13, name: 'Dosa', price: 45, image: 'https://tse3.mm.bing.net/th?id=OIP.gHlKP9WChJxsKPwYdbc6dgHaFz&pid=Api&P=0&h=180' },
  { id: 14, name: 'Paneer Tikka', price: 65, image: 'https://tse1.mm.bing.net/th?id=OIP.2hmlDW9iLOJbxFlLRuqIegHaEJ&pid=Api&P=0&h=180' },
  { id: 15, name: 'Chow Mein', price: 50, image: 'https://tse4.mm.bing.net/th?id=OIP.ipKgwXMOtFhm3F1nXqZrNgHaGT&pid=Api&P=0&h=180' },
  { id: 16, name: 'Spring Rolls', price: 45, image: 'https://tse3.mm.bing.net/th?id=OIP.aI4zoURcvze6Fbi_YXpGvAHaDp&pid=Api&P=0&h=180' },
  { id: 17, name: 'Fried Rice', price: 65, image: 'https://tse3.mm.bing.net/th?id=OIP.rdKidzzgPIa6bk7IOtHjzQHaFM&pid=Api&P=0&h=180' },
  { id: 18, name: 'Garlic Bread', price: 50, image: 'https://tse1.mm.bing.net/th?id=OIP.n7Swoa9_7Fi1lB1Uy8RezgHaEa&pid=Api&P=0&h=180' },
];


const FoodItem = () => {
  const [cartCount, setCartCount] = useState(0);
  const [orderedItems, setOrderedItems] = useState({});
  const [showCartSummary, setShowCartSummary] = useState(false);

  const handleQuantityChange = (itemId, quantity) => {
    setOrderedItems((prev) => ({
      ...prev,
      [itemId]: quantity,
    }));
  };

  const handleOrder = (itemId) => {
    const quantity = orderedItems[itemId] || 0;
    setCartCount((prev) => prev + quantity);
  };

  const handleShowCartSummary = () => {
    setShowCartSummary(true);
  };

  const handleCloseCartSummary = () => {
    setShowCartSummary(false);
  };

  const handleRemoveItem = (itemId) => {
    setOrderedItems((prev) => {
      const updatedItems = { ...prev };
      delete updatedItems[itemId];
      return updatedItems;
    });
    setCartCount((prev) => prev - (orderedItems[itemId] || 0));
  };

  const calculateTotalAmount = () => {
    return Object.keys(orderedItems).reduce((total, itemId) => {
      const item = foodItems.find((item) => item.id === parseInt(itemId));
      const quantity = orderedItems[itemId] || 0;
      return total + item.price * quantity;
    }, 0);
  };

  return (
    <div className='food-container'>
      <button className="cart-button" onClick={handleShowCartSummary}>
        My Cart ({cartCount})
      </button>
      <div className="food-items-container">
        {foodItems.map((item) => (
          <div key={item.id} className="food-item-card">
            <img src={item.image} alt={item.name} className="food-item-image" />
            <h2>{item.name}</h2>
            <p>Price: ₹{item.price}</p>
            <label>
              Quantity:
              <select onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}>
                <option value="0">0</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </label>
            <p>Total: ₹{orderedItems[item.id] ? item.price * orderedItems[item.id] : 0}</p>
            <button className="order-button" onClick={() => handleOrder(item.id)}>Order</button>
          </div>
        ))}
      </div>

      {/* Cart Summary Modal */}
      {showCartSummary && (
        <div className="cart-summary-modal">
          <div className="cart-summary-content">
            <h2>Cart Summary</h2>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(orderedItems).map((itemId) => {
                  const item = foodItems.find((item) => item.id === parseInt(itemId));
                  const quantity = orderedItems[itemId];
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{quantity}</td>
                      <td>₹{item.price}</td>
                      <td>₹{item.price * quantity}</td>
                      <td>
                        <button onClick={() => handleRemoveItem(item.id)}>Cancel</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="cart-total">
              <h3>Total Amount: ₹{calculateTotalAmount()}</h3>
            </div>
            <button onClick={handleCloseCartSummary} className="close-modal-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodItem;
