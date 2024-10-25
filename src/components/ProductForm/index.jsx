// ProductForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addAction, editAction } from '../../redux/actions/productAction';

const ProductForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  useEffect(() => {
    if (id) {
      const product = products.find((prod) => prod.id === parseInt(id));
      if (product) {
        setProductName(product.name);
        setProductPrice(product.price);
      }
    }
  }, [id, products]);

  const handleSaveProduct = () => {
    if (productName && productPrice) {
      if (id) {
        dispatch(editAction(parseInt(id), { name: productName, price: productPrice }));
      } else {
        dispatch(addAction({ id: Date.now(), name: productName, price: productPrice }));
      }
      navigate('/products');
    } else {
      alert('Please enter both name and price');
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Product' : 'Add Product'}</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Product Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <button onClick={handleSaveProduct}>{id ? 'Update Product' : 'Add Product'}</button>
      <button onClick={() => navigate('/products')}>Cancel</button>
    </div>
  );
};

export default ProductForm;
