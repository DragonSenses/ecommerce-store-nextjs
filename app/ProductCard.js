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

  function onProductClickHandler() {
    Router.push();
  }

  return (
    <div className='flex flex-col shadow bg-white hover:shadow-lg
    cursor-pointer'>
      <img 
        src={productInfo.images[0]} alt={name} 
        className='w-full h-full object-cover' 
      />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <h3>{name}</h3>
          <p>${cost/100}</p>
        </div>
        <p className='text-sm'>{description}</p>
      </div>
    </div>
  )
}
