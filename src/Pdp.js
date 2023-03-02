import React from 'react';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';

import './style.css';

export default function Pdp() {
  return (
    <div>
      <div class="l-pdp-top " data-tau="product_details">
        <ProductImage />
        <ProductDetails />
      </div>
    </div>
  );
}
