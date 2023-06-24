export async function POST(req, res) {
  const body = JSON.parse(req.body);

  if(body.lineItems.length === 0){
    return new res.sendStatus(405);
  }

  try{
    // Initialize Stripe
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
      apiVersion: '2020-08-27'
    });

    
  } catch(err) {
    console.log("error on checkout");
  }
}