import Image from 'next/image'
import Stripe from 'stripe'

async function getStripeProducts(){
  // Initialize Stripe
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
    apiVersion: '2020-08-27'
  });

  // Access our product data, by requesting a list of prices
  const res = await stripe.prices.list({
    expand: ['data.product']
  });


}

export default async function Home() {

  return (
    <main className="p-4">
      Main Text
    </main>
  )
}
