import React from 'react';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import { useEffect } from 'react';
import './style.css';

export default function Pdp() {
  useEffect(() => {
    fetch('https://react-train-api.vercel.app/')
      .then((response) => response.json())
      .then((data) => setProductData(data))
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <div className="l-pdp-top " data-tau="product_details">
        <ProductImage />
        <ProductDetails product={} />
      </div>
    </div>
  );
}
