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

  return(
    <div>
      Hello, this is the Product Page.
    </div>
  )
}