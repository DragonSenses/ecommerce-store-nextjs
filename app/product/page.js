"use client"

import useCart from "../(store)/store";

export default function ProductPage(props) {
  const { searchParams } = props;
  const { price_id } = searchParams;

  const product = useCart(state => state.product);
  const addItemToCart = useCart(state => state.addItemToCart);

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
  // Used to dynamically render the product page
  const {
    name,
    description,
    cost,
    productInfo,
  } = product;
  
  function handleAddToCart() {
    const newItem = {
      price_id: price_id,
      quantity: 1,
    }
    addItemToCart({newItem});
  }

  return(
    <div className="flex flex-col p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
        <div className="md:p-2 shadow">
          <img 
            src={productInfo.images[0]} alt={name} 
            className='w-full h-full object-cover' 
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="flex md:flex-col text-xl md:items-start items-center
          justify-between gap-2">
            <h3>{name}</h3>
            <p className="md:text-base">${cost / 100}</p>
          </div>
          <p className="text-sm flex-1">{description}</p>
          <button onClick={handleAddToCart} className='bg-slate-700 text-white hover:bg-slate-500
          cursor-pointer ml-auto px-4 py-2'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}