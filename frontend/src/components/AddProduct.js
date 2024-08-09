import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // Kullanıcının rolünü localStorage'dan alıyoruz
  const role = localStorage.getItem('role');

  // Eğer kullanıcı admin değilse ana sayfaya yönlendir
  if (role !== 1) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://localhost:5001/api/product', { name, price });
      console.log('Product added:', response.data);
    } catch (error) {
      console.error('There was an error adding the product!', error);
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
