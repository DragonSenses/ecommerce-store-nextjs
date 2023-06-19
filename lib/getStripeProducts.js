import Stripe from 'stripe';

export async function getStripeProducts(){
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