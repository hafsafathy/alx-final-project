import React, { useEffect } from 'react';
import './ShoppingCart.css';

function ShoppingCart({ cartActive, setCartActive, itemList, setItemList }) {
  useEffect(() => {
    updateTotal();
  }, [itemList]);

  const removeItem = (title) => {
    if (window.confirm('Are you sure to remove?')) {
      setItemList(itemList.filter((item) => item.title !== title));
    }
  };

  const changeQty = (title, quantity) => {
    if (isNaN(quantity) || quantity < 1) {
      quantity = 1;
    }
    setItemList(itemList.map((item) =>
      item.title === title ? { ...item, quantity } : item
    ));
  };

  const updateTotal = () => {
    const newTotal = itemList.reduce((acc, item) => {
      const price = parseFloat(item.price.replace('EP.', ''));
      return acc + (price * item.quantity);
    }, 0);
    document.querySelector('.total-price').innerText = 'EP.' + newTotal;
  };

  return (
    <div className={`cart ${cartActive ? 'active' : ''}`}>

      <div id="cart-close" onClick={() => setCartActive(false)}><ion-icon name="close" size='large'></ion-icon></div>
      <div className="cart-content">
        {itemList.map((item) => (
          <div className="cart-box" key={item.title}>
            <img src={item.image} className="cart-img" alt={item.title} />
            <div className="detail-box">
              <div className="cart-md-title">{item.title}</div>
              <div className="price-box">
                <div className="cart-price">{item.price}</div>
                <div className="cart-amt">EP.{parseFloat(item.price.replace('EP.', '')) * item.quantity}</div>
              </div>
              <input
                type="number"
                value={item.quantity}
                className="cart-quantity"
                onChange={(e) => changeQty(item.title, parseInt(e.target.value))}
              />
            </div>
            <ion-icon name="trash" className="cart-remove" onClick={() => removeItem(item.title)}></ion-icon>
          </div>
        ))}
      </div>
      <div className="total-price">EP.0</div>
    </div>
  );
}

export default ShoppingCart;
