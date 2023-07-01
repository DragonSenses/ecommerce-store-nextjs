import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request) {
  const body = await request.json();

  if(body.lineItems.length === 0){
    return new Response('Error', {
      status: 405,
    });
  }

  // Destructure out price_id from the request body
  const { price_id } = body.lineItems;

  try{
    // Initialize Stripe
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
      apiVersion: '2020-08-27'
    });

    // Fetch a list of prices
    const res = await stripe.prices.list({
      expand: ['data.product']
    });

    // Access price list data within the response (an array)
    const dataArr = res.data;

    // Filter through by price_id
    const price = dataArr.filter(item => item.id === price_id);

    return NextResponse.json({ price });

  } catch(err) {
    console.log("-------- error on product page load --------");
    console.log(err);
    return new Response('Error', {
      status: 500,
    });
  }
}