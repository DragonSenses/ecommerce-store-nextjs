import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(request) {
  const body = await request.json();

  if(body.lineItems.length === 0){
    return new Response('Error', {
      status: 405,
    });
  }

  try{
    // Initialize Stripe
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
      apiVersion: '2020-08-27'
    });

    // Destructure out price_id from the request body
    const { price_id } = body.lineItems;

    // Access our product data, by retrieving the price given the id
    const res = await stripe.prices.retrieve(
      price_id
    );

    return NextResponse.json({ res });

  } catch(err) {
    console.log("-------- error on product page load --------");
    console.log(err);
    return new Response('Error', {
      status: 500,
    });
  }
}