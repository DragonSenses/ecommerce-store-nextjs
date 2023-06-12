import React from 'react';

export default function ProductCard(props) {
  const { product } = props;
  
  const {
    id: price_id,
    unit_amount: cost,
    product: productInfo,
  } = product;

  const {
    name,
    description
  } = productInfo;

  return (
    <div className='flex flex-col shadow bg-white hover:shadow-lg
    cursir-point'>
      <img 
        src={productInfo.images[0]} alt={name} 
        className='w-full h-full object-cover' 
      />
    </div>
  )
}
