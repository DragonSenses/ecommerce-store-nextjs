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
    unit_amount: cost,
    product: productInfo,
  } = product;

  return(
    <div>
      Hello, this is the Product Page.
    </div>
  )
}