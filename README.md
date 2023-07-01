# ecommerce-store-nextjs
 A full-stack E-commerce app using NextJS, React, TailwindCSS, Zustand, and Stripe API.

# Description

A ecommerce store application built with NextJS 13.4.7

## The app satisfies the following use cases:

- Users can view products on the store
- Users can share URLs to products
- Users can add products to cart
- Users can purchase the products
- Users can view their cart

# Technologies:

A **full-stack e-commerce** application using:

- **Next.js** and **React** as the front-end of our application
- **Stripe** API for product and transaction handling
- **TailwindCSS** to design and stylize our app
- **Zustand** for global state management

# Instructions to run a local copy

1. Clone this repository and save to a folder on a laptop (or on GitHub click `Code` > `Download Zip`)

2. Go to the directory (folder) where code is stored 

    ```powershell
    cd /ecommerce-store-nextjs
    ```

3. Create `.env` file to load your specific environment variables

Create a `.env` file at the root of the project directory.

```js
STRIPE_SECRET="YOUR_STRIPE_API_KEY"
```

Ensure that you have [Stripe](https://stripe.com/) account with products you've loaded in.

Get your STRIPE API key and place it inside the `.env` file, replacing the "YOUR_STRIPE_API_KEY" including the `"` quotation marks.

4. Build and run the application

Ensure you have Nodejs with `npm` installed.

Enter the commands in the terminal:

```sh
npm run dev
```

Open the `url` link on your browser: usually it is:

```sh
http://localhost:3000
```

5. Have fun shopping