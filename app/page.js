import Image from 'next/image';
import Stripe from 'stripe';
import ProductCard from './ProductCard';

async function getStripeProducts(){
  // Initialize Stripe
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
    apiVersion: '2020-08-27'
  });

  // Access our product data, by returning a list of prices
  const res = await stripe.prices.list({
    expand: ['data.product']
  });

  // Access the prices of our product data
  const prices = res.data;

  return prices;
}

export default async function Home() {
  const products = await getStripeProducts();
  console.log(products);

  return (
    <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product, productIndex) => {

        return (
          <ProductCard key={productIndex} product={product}/>
        )

      })}
    </main>
  )
}
