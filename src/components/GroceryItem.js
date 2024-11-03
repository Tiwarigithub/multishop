// 


import React, { useState } from 'react';
import "./GroceryItem.css"; // Use a separate CSS file for GroceryItem if needed

const groceryItems = [
  { id: 1, name: 'Rice', price: 50, image: 'https://tse4.mm.bing.net/th?id=OIP.YTSGhyCEFOb0p0VmWnZOvwHaE8&pid=Api&P=0&h=180' },
  { id: 2, name: 'Flour', price: 40, image: 'https://tse4.mm.bing.net/th?id=OIP.yzqrhE0YKBhmWCH46nTCZAHaFR&pid=Api&P=0&h=180' },
  { id: 3, name: 'Sugar', price: 55, image: 'https://tse3.mm.bing.net/th?id=OIP.Rijopgi4SCvrbVD7REfn1wHaFQ&pid=Api&P=0&h=180' },
  { id: 4, name: 'Salt', price: 60, image: 'https://tse3.mm.bing.net/th?id=OIP.pdbDGfWzFU2VDnuODvN1IQHaFI&pid=Api&P=0&h=180' },
  { id: 5, name: 'Pulses', price: 45, image: 'https://tse1.mm.bing.net/th?id=OIP.xArHJn6LB0gxxe-ZwPUPTAHaFj&pid=Api&P=0&h=180' },
  { id: 6, name: 'Vegetable Oil', price: 100, image: 'https://tse3.mm.bing.net/th?id=OIP.8vzQD8AaDhPU889tZs8OyQHaEI&pid=Api&P=0&h=180' },
  { id: 7, name: 'Coffee', price: 150, image: 'https://tse4.mm.bing.net/th?id=OIP.6UxpoMrqyAc9tJqBV0SzPgHaE6&pid=Api&P=0&h=180' },
  { id: 8, name: 'Tea', price: 100, image: 'https://tse2.mm.bing.net/th?id=OIP.BfT4ZmaWJ2wgrLEu7x1A8AHaE8&pid=Api&P=0&h=180' },
  { id: 9, name: 'Cereal', price: 90, image: 'https://tse3.mm.bing.net/th?id=OIP.JwRdnAl8JwPunsxFIJswSAHaFI&pid=Api&P=0&h=180' },
  { id: 10, name: 'Butter', price: 78, image: 'https://tse4.mm.bing.net/th?id=OIP.BUy9wW-rxciIxmZNxhQr0wHaFL&pid=Api&P=0&h=180' },
  { id: 11, name: 'Cheese', price: 65, image: 'https://tse2.mm.bing.net/th?id=OIP.yQeD7pFhgl0ga2I4dHjvwgHaEu&pid=Api&P=0&h=180' },
  { id: 12, name: 'Yogurt', price: 60, image: 'https://tse1.mm.bing.net/th?id=OIP.6I11C9KAb8qvhfTCME2-egHaE8&pid=Api&P=0&h=180' },
  { id: 13, name: 'Butter', price: 50, image: 'https://tse2.mm.bing.net/th?id=OIP.0XRaErpNj-p_h5wYhblWJgHaE8&pid=Api&P=0&h=180' },
  { id: 14, name: 'Oats', price: 120, image: 'https://tse2.mm.bing.net/th?id=OIP.lRH5DU8cVYrbT4kS7qZ1qAHaEn&pid=Api&P=0&h=180' },
  { id: 15, name: 'Vinegar', price: 60, image: 'https://tse3.mm.bing.net/th?id=OIP.CVfaMGx4QeRA2pgO1r6VaQHaFg&pid=Api&P=0&h=180' },
  { id: 16, name: 'Biscuits', price: 20, image: 'https://tse1.mm.bing.net/th?id=OIP.4O-V1Tx1N-5TiPYmh73gKgHaEX&pid=Api&P=0&h=180' },
  { id: 17, name: 'Nuts', price: 60, image: 'https://tse4.mm.bing.net/th?id=OIP.bUehrDKhbbXef_TQ1gbPngHaD_&pid=Api&P=0&h=180' },
  { id: 18, name: 'Milk', price: 50, image: 'https://tse2.mm.bing.net/th?id=OIP.0z_Krh6KMBTUj1UCakq3mAHaDT&pid=Api&P=0&h=180' },
];

const GroceryItem = () => {
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
      const item = groceryItems.find((item) => item.id === parseInt(itemId));
      const quantity = orderedItems[itemId] || 0;
      return total + item.price * quantity;
    }, 0);
  };

  return (
    <div>
      <button className="cart-button" onClick={handleShowCartSummary}>
        My Cart ({cartCount})
      </button>
      <div className="grocery-items-container">
        {groceryItems.map((item) => (
          <div key={item.id} className="grocery-item-card">
            <img src={item.image} alt={item.name} className="grocery-item-image" />
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
                  const item = groceryItems.find((item) => item.id === parseInt(itemId));
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

export default GroceryItem;
