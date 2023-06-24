import Stripe from 'stripe';

export async function retrieveStripeProduct(product_id){
  // Initialize Stripe
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
    apiVersion: '2020-08-27'
  });

  // Access our product data, by returning a list of prices
  const res = await stripe.prices.retrieve(
    product_id
  );

  // console.log("================ Response ======================");
  // console.log(res);
  // console.log("================ End of Response ======================");

  return res;
}