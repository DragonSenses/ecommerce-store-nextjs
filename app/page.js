import Image from 'next/image'
import Stripe from 'stripe'

async function getStripeProducts(){
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
    apiVersion: '2020-08-27'
  });
  const res = await stripe.prices.list({

  });
}

export default async function Home() {
  return (
    <main className="p-4">
      Main Text
    </main>
  )
}
