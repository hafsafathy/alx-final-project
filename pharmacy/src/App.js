import React, { useState, useEffect } from 'react';
import './App.css';
import Index from './pages/Index';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import ContactUs from './pages/ContactUs';
import Header from './pages/Header'; 
import Footer from './pages/Footer';
import axios from 'axios';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      alert('Product already in cart');
      return;
    }
    setCart([...cart, { ...product, quantity: 1 }]);
  };
  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Header itemList={cart} setItemList={setCart} />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/Products' element={<Products addToCart={addToCart} />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/ContactUs' element={<ContactUs />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
// all good