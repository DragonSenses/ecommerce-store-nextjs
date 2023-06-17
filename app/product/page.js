"use client"

import useCart from "../(store)/store";

export default function ProductPage(props) {
  const { searchParams } = props;
  const { price_id } = searchParams;

  const product = useCart(state => state.product);

  // log the variables
  console.log('searchParams are:')
  console.log(searchParams);
  console.log('price_id is:')
  console.log(price_id);
  console.log('product is:')
  console.log(product);

  if(!product?.name){
    window.location.href = '/';
  }

  // Destructure the information we need from the product
  const {
    name,
    description,
    cost,
    productInfo,
  } = product;

  return(
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
        <div className="md:p-2 shadow">
          <img 
            src={productInfo.images[0]} alt={name} 
            className='w-full h-full object-cover' 
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex text-xl sm:items-center md:flex-col justify-between">
            <h3>{name}</h3>
            <p>{cost / 100}</p>
          </div>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}