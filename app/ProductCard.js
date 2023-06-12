import React from 'react';

export default function ProductCard(props) {
  const { product } = props;
  
  const {
    id: price_id,
    unit_amount: cost,
    product: productInfo,
  } = product;

  return (
    <div>ProductCard</div>
  )
}
