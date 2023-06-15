"use client"

import useCart from "../(store)/store";

export default function ProductPage(props) {
  const { searchParams } = props;

  const { price_id } = props;

  const product = useCart(state => state.product);

  // log the variables
  console.log(searchParams);
  console.log(price_id);
  console.log(product);

  return(
    <div>
      Hello, this is the Product Page.
    </div>
  )
}