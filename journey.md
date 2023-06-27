# A new journey!

I'm excited to start on another project, this time with many new things.

As you know during my previous project [job-tracker](https://github.com/DragonSenses/job-tracker), during the months of March 2023 to June 2023 the React documentation was still in [beta](https://beta.reactjs.org/) but almost complete.

It was during that time when React finally promoted the beta docs to the official [React documentation](https://react.dev/)!

You can still see the old documentation in https://legacy.reactjs.org

## What's new?

- Hooks and Functional Components as Default (a strong usage of Hooks and functional components as the standard approach)
- Interactive demos and challenges

And one of the biggest changes:
- Removal of the [Create React App (CRA)](https://create-react-app.dev/), the official Facebook-maintained React quick-configuration tool. The legacy docs recommended CRA as "the best way to start building a new single-page application in React"

CRA had a lack of features (such as native support for TypeScript or CSS library Tailwind), size, performance. Just like Blizzard's StarCraft 2, **CRA is no longer maintained**.

## What to use then!?

[Official React docs](https://react.dev/learn/start-a-new-react-project#create-react-app) recommends using the following frameworks:

- **Next.js**
- **Remix**
- **Gatsby**

## Next.js 

[Next.js](https://nextjs.org/) is a full-stack React framework. It's versatile and lets you create React apps of any size - from a mostly static blog to a complex dynamic application.

To create a new `Next.js` project, run in the terminal:

```sh
npx create-next-app
```

# Project Introduction

A full-stack e-commerce application using:

- **Next.js** and **React** as the front-end of our application
- **Firebase** Authentication
- **Firestore** noSQL databases
- **Stripe** API for product and transaction handling
- **TailwindCSS** to design and stylize our app
- **Zustand** for global state management

# Project Instructions

Let's start by creating the folder you want to store the project in, in my case I called it `ecommerce-store-nextjs`.

In the terminal (powershell, etc.):

```powershell
mkdir ecommerce-store-nextjs
cd ecommerce-store-nextjs
```

Then create a new Next.js project:

```sh
npx create-next-app@latest ecommerce-store-nextjs
```

- Created a Next.js app with `@latest`
- Give a name for the project : `ecommerce-store-nextjs`

Hitting `[Enter]` will give us configurations to do for our terminal.

Here is the prompt:

```sh
Need to install the following packages:
  create-next-app@13.4.4
Ok to proceed? (y) y
√ What is your project named? ... ecommerce-store-nextjs
√ Would you like to use TypeScript with this project? ... No / Yes
√ Would you like to use ESLint with this project? ... No / Yes
√ Would you like to use Tailwind CSS with this project? ... No / Yes
√ Would you like to use `src/` directory with this project? ... No / Yes
√ Use App Router (recommended)? ... No / Yes
√ Would you like to customize the default import alias? ... No / Yes
```

- Yes to proceed, named the project
- No to using TypeScript for now
- Yes to ESLint
- Yes to Tailwind CSS
- No for `src/` directory
- Yes for App Router
- No to `import alias` as in we will keep the alias the same

## File Structure

Let's look at the file structure. Looks quite standard to `Nextjs`, but some changes in NextJS_13 is the `app` directory we selected to use:

- Instead of having `/pages`, `/components`, and `/src` directories everything is now done in the `/app` directory.

- `globals`, `layout`, and `page`

-`layout` and `page` are reserved keywords that do specific things within `/app`

- In root level directory, within `/app` the file that gets rendered is `/app/page.js`
- The `/app/layout.js` wraps our app, `page.js` and any sub-pages that we define. This will contain our `header`, `footer` and more.

## Using Tailwind CSS with Next.js

[Installing Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs).

1. We already did the first step

2. Step 2 and paste over the commands:

```sh
npm install -D tailwindcss postcss autoprefixer
```

```sh
npx tailwindcss init -p
```

3. In `tailwind.config.js`, populate the `content` array

```json
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
```

4. Add Tailwind directives


Go to `app/globals.css` and place at the top:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Fix TailwindCSS Lint warnings

`globals.css` will throw out some warnings where "Unknown rule @tailwind". So here's the fix.

Use official [Tailwind CSS IntelliSenses extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) to extend built-in CSS language mode to fix lint warnings, without losing any of VS Code's default IntelliSense features. A StackOverflow [response](https://stackoverflow.com/questions/47607602/how-to-add-a-tailwind-css-rule-to-css-checker) if you would want to use an alternative to an extension.

[Add TailwindCSS to VS Code Settings under `files.associations](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss#recommended-vs-code-settings).

## To Update NextJS

During development, NextJS version can be out-of-date. [NextJS version staleness](https://nextjs.org/docs/messages/version-staleness) has more on this, so run this command to update it to a stable release:

```sh
npm i next@latest
```

## Start the Build Process

```sh
npm run dev
```

Which will start up in `http://localhost:3000`, so open that link up in a browser.

We will see some boiler-plate code inside `page.js`.

We can delete the JSX element that's being returned by `Home()`:

```js
export default function Home() {
  return (
    // Delete everything in here
  );
}
```

We can add a `<main>` tag to return with a `className='bg-green-200 min-h-screen'` to see if TailwindCSS is working.

## Apply Font-Family to entire project

- `/app` is the main entry-point for the component tree.
- `layout.js` will wrap

Let's clear out `page`:

```js
export default function Home() {
  return (
    <main className="">
      
    </main>
  )
}
```

Next.js allows us to apply fonts. In the `layout`:

```js
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

Let's start styling the `body`,

```js
      <body className={'min-h-screen flex flex-col ' + inter.className}>
```

Notice how we leave a space right after the last style and `inter.className`.


Let's update the metadata:

```js
export const metadata = {
  title: 'E-commerce store',
  description: 'E-commerce store made with NextJS',
}
```

## Add Header and footer component

```js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={
        'min-h-screen flex flex-col relative ' + inter.className
      }>
        <header className=''>HEADER</header>
        <div className="flex-1">
          {children}
        </div>
        <footer className=''>FOOTER</footer>
      </body>
    </html>
  )
}
```

## Using `<head>` tag

To use the icons at [Font Awesome Icons (free)](https://fontawesome.com/search?m=free&o=r), we need to do some set-up.

Going to use `<head>` tag to import [Font Awesome CDN](https://cdnjs.com/libraries/font-awesome) package, click the `</>` icon to copy the `<link>` tag. Paste it inside the `<head>`.

- One change: have to capitalize the O in Origin and P in Policy

```js
<link rel="stylesheet" href="..." crossOrigin="anonymous" referrerPolicy="no-referrer" />
```

Now go to the [Font Awesome Icons (free)](https://fontawesome.com/search?m=free&o=r) and search for "cart" so we can use the cart icon. 

Now add these things in the `<header>`,

```js
<h1>Shop</h1>
<i className="fa-solid fa-cart-shopping"></i>
```

Let's further add these classes to the header:

```js
'flex item-center justify-between'
```

Then style the `<h1>`

```js
<h1 className='uppercase cursor-pointer hover:scale-110'>Shop</h1>
```

Giving it a hover

### Adding css transition duration

Going to add a css class using the `*` to target every element of the page.

In `globals.css`:

```css
* {
  transition-duration: 200ms;
}
```

So now our hover is a bit slower.

This could be improved by targeting the header specifically.

Gave `header` an `id='header'` then gave it the specific style. Colored it purple for demonstration purposes so the changes would be seen immediately.

```css
#header > h1 {
  transition-duration: 200ms;
  color: purple;
}
```

## Using `Link`

In Next.js:

```js
import Link from 'next/link'

<Link href={'...'}></Link>
```

Wrap the contents of the `header` in a Link tag, with an `href={'/'}`.

```js
<header>
  <Link href={'/'}>
    <h1 className='uppercase cursor-pointer hover:scale-110'>Shop</h1>
    <i className="fa-solid fa-cart-shopping"></i>
  </Link>
</header>
```

So when user clicks the `h1` at the top it will `Link` them back to the home page.

#### Learning point: flex does not apply to descendants but immediate children

```js
<header className='flex items-center justify-between sticky'
  <Link href={'/'}>
    <h1 className='uppercase cursor-pointer hover:scale-110'>Shop</h1>
    <i className="fa-solid fa-cart-shopping"></i>
  </Link>
</header>
```

What's the issue above? Well the `flex items-center justify-between` should be putting the `h1` and `i` elements apart. But it does not. Why? They are both wrapped in `Link` and `flex` only applies to the immediate children of `header` which is just `Link` in this case.

**The fix**: bring out `<i>` so now it would be a sibling element to `Link` and `flex` will apply.

```js
<header className='flex items-center justify-between sticky'
  <Link href={'/'}>
    <h1 className='uppercase cursor-pointer hover:scale-110'>Shop</h1>
  </Link>
  <i className="fa-solid fa-cart-shopping"></i>
</header>
```

# Stripe

Head on over to [Stripe](https://stripe.com/), create an account. Go to the Dashboard, in the top left where it says `(New Business)` click that and create a New Account.

Going to call it e-commerce store, click Create Account.

It will offer you `use case or product` go with `Try Connect` thats about "Run a platform or marketplace".

At this point just exit, and go to the dash board. Click `Developers` in the top right. Enable `Test Mode`. Enabling `Live Mode` will start billing and processing transactions.

## Create `.env` file

Go to project directory and create `.env` file.

In `.gitignore`, confirm that this is within it:

```t
# local env files
.env*.local
```

For safe measure add `.env` inside `.gitignore`:
```t
# local env files
.env*.local
.env
```

This will ensure that `.env` file will not be pushed to any public repositories as this will store **sensitive data, including API keys, passwords, etc.**

Inside `.env`, create the Stripe key:

```t
STRIPE_SECRET="YOUR_SECRET_STRIPE_KEY";
```

Find that your secret stripe key, in the Dashboard > Developers > API Keys.

Click > `[Reveal test key]` next to `Secret key` > Copy the entire key > post it inside as the value to `STRIPE_SECRET` and save `.env` file.

With this in place we can now install `stripe`.

## Install Stripe

In the terminal, we are probably still running our `npm run dev`. Type `[CTRL] + [C]` on the keyboard to terminate the run operation in the Terminal. Press `Y` to confirm in the terminal to **terminate batch job**.

Then let's install Stripe:

```sh
npm i stripe
```

## **Next13's new feature:** Getting Static information

Historically, we would've used [`getStaticProps()`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props) which we no longer have to do that.

We don't have to use any user fix or `useState` to handle loading data in server side.

**We can just define an asynchronous function** and we can turn our **Home page into an asynchronous function as well**.

This means the Home page will be pulled in asynchronously server-side before the page actually gets rendered. 

- **By default all pages are server-side rendered in Next13**, it means its extremely quick and data is loaded instantaneously and avoiding any client-side rendering.

Let's try it out: in the `page.js`

- Add `async` to the Home page component

```js
export default async function Home() {
```

Create `async` function:

```js
import Stripe from 'stripe'

async function getStripeProducts(){
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
    apiVersion: '2020-08-27'
  });
}
```

- In that function we initialize `Stripe` inside of the function server-side by passing in our API key as the first argument. We will provide a back-up of an empty string through the use of [nullish coalescing operator](https://javascript.info/nullish-coalescing-operator). If our `key` is defined then `key`, otherwise if it is not defined then `''` or an empty string.

- The next parameter is setting the Stripe API version, which is '2020-08-27', by doing so allows us **to avoid any surprises in your production code when you decide to upgrade your account’s default API version later on.**

[Set a Stripe API version](https://stripe.com/docs/libraries/set-version).

- After initializing, get a response that contains our data to access all of our products.

[Stripe API: List all Prices in Node.js](https://stripe.com/docs/api/prices/list?lang=node). As you can see we `await stripe.prices.list({});` to `GET` our data.
- Inside of the `list()` method, we pass in an object that has 1 key `expand` with the value as an `array` that contains the string `'data.product'`.

```js
async function getStripeProducts(){
  // Initialize Stripe
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
    apiVersion: '2020-08-27'
  });

  // Access our product data
  const res = await stripe.prices.list({
    expand: ['data.product']
  });
```

- Next we store that response's data under a variable `prices` and return it

```js
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
```

- Now this will be accessible as `products` after invoking the `async function` in our actual component:

```js
export default async function Home() {
  
  const products = getStripeProducts();
  
  return (
    // ...
  )
}
```

## Creating Products

Go to Stripe Dashboard and click Products.

Click Add a Product, fill out the information regarding the product. Make sure to click `One time` as the payment.

Now click "Save product" in the top right.

Create our 3 products, upload images, etc.

Now we can access our product data through this:

```js
  // Access our product data, by returning a list of prices
  const res = await stripe.prices.list({
    expand: ['data.product']
  });
```

Let's go ahead and log our products to see them:

```js
export default async function Home() {
  const products = getStripeProducts();
  console.log(products);
  // ...
```

Lets boot up our app with `npm run dev`.

This is what was recorded in the terminal:

```sh
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 907,
  [Symbol(trigger_async_id_symbol)]: 904,
  [Symbol(kResourceStore)]: {
    headers: [Getter],
  ...
```

So it returns a Promise, which means we are missing something in our code. We need to add `await`.

```js
export default async function Home() {
  const products = await getStripeProducts();
  console.log(products);
  // ...
```

Now refresh the page @ `http://localhost:3000/`

Now we get the actual products in the terminal:

```sh
[
  {
    id: 'price_1NHdRIJ4MEfvtz7t6WZZCDKS',
    object: 'price',
    active: true,
    billing_scheme: 'per_unit',
    // ...
```

### Stripe response:

What is `res` exactly? With `console.log(res)`, here it is logged:

```js
{
  object: 'list',
  data: [
    {
      id: 'price_1NHdRIJ4MEfvtz7t6WZZCDKS',
      // ...
    },
    {
      id: 'price_1NHdP5J4MEfvtz7tmqJunj52',
      // ...
    },
    {
      id: 'price_1NHdMqJ4MEfvtz7tfUzEd2pz',
      // ...
    }
  ],
  has_more: false,
  url: '/v1/prices'
}
```

`res` has the properties:
-`object`, `data`, `has_more` and `url`

# Creating Components

You cannot randomly name components because they have **reserved** names.

We will create two components:

1. `loading.js`

Inside `/app/loading.js` :

```js
export default function loading() {
  return (
    <div>Loading...</div>
  )
}
```

This will be a special component that wraps our app (similar to layout). It acts in the same way that the new [React <Suspense> tags](https://react.dev/reference/react/Suspense) work (`<Suspense>` lets you display a fallback until its children have finished loading).

They check for any promises in the children content, and if they do then `loading` page gets displayed.

We can see that when we refresh our page. While we are loading data, the page is automatically rendered by default. The loading behavior is all handled, without needing to have a loading state inside of our app. It is seamless, a great feature from NextJS 13.

2. `error.js`

When we fetch data we typically handle an error state. This is also a reserved component name, so in `/app/error.js`

```js
export default function Error() {
  return (
    <div>Error...</div>
  );
}
```

Because this component is in the state of being rendered server-side like our loading component, and layout, pages. We need to make this component server-side as well.

## To make Error component server-side

We have to add the statement: `"use client"` at the top.

```js
"use client"

export default function Error() {
  return (
    <div>Error...</div>
  );
}
```

If we have any errors pulling our data, we will just display this Error component. Another Next.js 13 feature!

## Styling the Home Page

```js
export default async function Home() {
  const products = await getStripeProducts();
  console.log(products);

  return (
    <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      Main Text
    </main>
  )
}
```

Decided to go with a grid layout to display our products, applying responsive design on certain break points.

## First actual component (not reserved name)

Let's create our first component called `ProductCard.js`. Let's use the "rfc" trick to create our React Functional Component using Visual Studio Code Extension for React: [ES7+ React/Redux/React-Native snippets
].

`/app/ProductCard.js`

```js
import React from 'react';

export default function ProductCard(props) {
  return (
    <div>ProductCard</div>
  )
}
```

This component will receive some props.

We should import this in `page.js` and place it inside the `main` tag thats being returned by the `Home` component.

```js
import ProductCard from './ProductCard';

export default async function Home() {
  const products = await getStripeProducts();
  console.log(products);

  return (
    <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {}
      <ProductCard />

    </main>
  )
}
```

- Now inside the `main`, we want to `map` out the products into a `ProductCard`.
- Make sure to give it an index to use as a key within the mapping

```js
export default async function Home() {
  const products = await getStripeProducts();

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
```

Now reload the page and we will see our `ProductCard` text rendered out in the home page.

## Refactoring the Layout

Going to move the responsive `grid` utility classes into a `div` under `main`. Then give `main` a `flex flex-col` class.

Like so:

```js
export default async function Home() {
  const products = await getStripeProducts();

  return (

    <main className="p-4 flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

        {products.map((product, productIndex) => {
          // ..
        })}
      </div>
    </main>
  )
}
```

The reason is so that I can define a max-width of `1000px` on the `div` element.

```js
<main className="p-4 flex flex-col">
  <div className="max-w-[1000px] w-full mx-auto grid grid-cols-1 
  sm:grid-cols-2 md:grid-cols-3">
    {products.map((product, productIndex) => {
```

This means that on an even larger page, our products will self-center and won't continue to become larger.

```js
<div className="max-w-[1000px] w-full mx-auto grid grid-cols-1 
  sm:grid-cols-2 md:grid-cols-3">
```

## Implementing the `ProductCard`

2 Layers of Destructuring:
- Destructure out the `product` from the `props`
- Destructure out the variables from the `product`

```js
export default function ProductCard(props) {
  const { product } = props;
  
  const {

  } = product;
```

What are the variables we need? Looking at the terminal where the `products` were logged, we can see some information about each `product`.

- The `id` - the identification for the product (let's give it an alias of `price_id`)
- `unit_amount` - the actual price we specified in Stripe (give it an alias of `cost`)
-  `product` - an object of the product itself (its alias will be `productInfo`)

```js
  const {
    id: price_id,
    unit_amount: cost,
    product: productInfo,
  } = product;
```

### Styling the `ProductCard`

```js
    <div className='flex flex-col shadow bg-white hover:shadow-lg
    cursor-pointer'>
      ProductCard
    </div>
```

As for the Content on the page, let's use the image from the `images` array. First, we need to use some info from `productInfo` for the `alt` used in the `img` tag.

3rd Layer of Destructuring:
```js
  const {
    name,
    description
  } = productInfo;
```

Then the `img` element:

```js
  return (
    <div className='flex flex-col shadow bg-white hover:shadow-lg
    cursor-pointer'>
      <img src={productInfo.images[0]} alt={name} className='w-full h-full object-cover' />
    </div>
  )
```

#### Add a gap between `ProductCard`(s)

In `/app/page.js`, added a `gap-4`

```js
      <div className="max-w-[1000px] w-full mx-auto grid grid-cols-1
      sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, productIndex) => {
```

### Add more info to `ProductCard`

- Create a `div` under `img` then begin adding the rest of the data we destructured: `name`, `cost` (this is in cents so need to divide by 100), and `description`.

```js
  return (
    <div className='flex flex-col shadow bg-white hover:shadow-lg
    cursor-pointer'>
      <img 
        src={productInfo.images[0]} alt={name} 
        className='w-full h-full object-cover' 
      />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <h3>{name}</h3>
          <p>${cost/100}</p>
        </div>
        <p className='text-sm'>{description}</p>
      </div>
    </div>
  )
}
```

### Create onClick handler that routes us to a new page

- Will not use `<Link>` tag for routing, that's because we want to add a bit more functionalities for the onClick handler
- `<Link>` is great for main links because it is great for Search Engine Optimization (SEO), especially if you have different pages
- For our products however, it is not as important for now

Add this function to `ProductCard.js`

```js
  function onProductClick() {
    router.push();
  }
```

This will push us to a new route.

We will need to import `useRouter`, then create our router:

```js
import { useRouter } from 'next/navigation';

export default function ProductCard(props) {
  // ...
  const router = useRouter();
  // ...
}
```

#### ERROR: `useRouter` only works in Client Components. Add the "use client" directive at the top of the file to use it.

We got an error in the Chrome Dev Tools. So let's do the recommendation it told us to try.

`ProductCard` component can be a client component, so we can follow the recommendation by adding `"use client"` at the top of the file.

### Pushing to a new route

If we are pushing to a new route, we need to first *create* the route.

Create `/product` folder inside `/app`. Inside `/product`, create the file `page.js` which is the main page export.

It will export a default function, which for now just returns a JSX `div` element with some text.

In `/app/product/page.js`:
```js
export default function ProductPage() {
  return(
    <div>
      Hello, this is the Product Page.
    </div>
  )
}
```

### Implementing onClick handler

Now what route do we push inside the onClick handler?

```js
  function onProductClick() {
    router.push('/product?price_id=' + price_id);
  }
```

So we push to a `/product` with a query `?price_id=` that's assigned the actual `price_id` of the product.

Then we assign the onClick handler to the top level `div`

```js

  function onProductClick() {
    router.push('/product?price_id=' + price_id);
  }

  return (
    <div onClick={onProductClick} className='flex flex-col shadow bg-white hover:shadow-lg
    cursor-pointer'>
    // ...
```

Now that it has been assigned, when we click on a product on the page the `router` does re-route us by pushing the new route in the URL. The `price_id` is the query parameter. We are now in the `Product Page`.

We can return to the home page by clicking the components within the header (the logo or the shopping cart).

## Implementing `ProductPage`

When we click on a product in the home page, it should route us with the `price_id` as the query. We can access this variable within the `ProductPage` component (the page) itself. We receive the props, destructure the `searchParams` from it, and log it.

```js
export default function ProductPage(props) {
  const { searchParams } = props;
  
  console.log(searchParams);
```

We do in fact have the `price_id` logged into the terminal.

If you want to have [Dynamic Routes](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes), you can make dynamic segment by wrapping a folder's name in square brackets: `[folderName]`. e.g., `[price_id]`, this would be the variable name you destructure out.

Create the folder's location under `/app`.

# Initializing Global State for our Project | Using Zustand

At this point, we are going to set a product we select to our global state. Then read it in our second project.

Create the folder named `(store)` under `/app`. That's right it has *parenthesis* or round brackets `()` wrapping around it. This means that the `app` folder will not recognize it as a route. It will not look for components, or anything like that within it.

Inside `/app/(store)` we create a file `store.js`.

Kill our server (CTRL + C) for now so we can install Zustand.

[zustand](https://www.npmjs.com/package/zustand), a light-weight global state manager. You can even use it with persist methods to persist in localStorage. Let's install it in the terminal:

```sh
npm i zustand
```
## Zustand | Creating the Object Store

Now in `store.js` import zustand and create our method `useCart()`, which will create a `store` (see the zustand docs).

```js
import { create } from 'zustand';

const useCart = create()
```

`create()` will take a callback function that has a `set` and `get` method. Inside that we return an object store.

```js
const useCart = create(
  (set, get) => ({
    
  })
)
```

This object store will contain all our parameters.
- a `cart` that contains the list of all the products and their quantities
- a `product` that gets selected (an object)

```js
const useCart = create(
  (set, get) => ({
    cart: [],
    product: {},
    
  })
)
```

## Zustand | Creating a method in the objectStore

After that, the object store will define a lot of methods that are going to be used to interact with our store.
- `addItemToCart` method has a parameter, which we will destructure out for the `newItem`. Then when we have the `newItem` we will use the `set` method

```js
const useCart = create(
  (set, get) => ({
    cart: [],
    product: {},
    addItemToCart: (params) => {
      const { newItem } = params;
      set((state) => {

        }
      })
    }
  })
)
```

- the `set` method receives the current state, and it returns a new state because the state is `immutable`. The new state is a version based off of the original state. We cannot mutate the state directly, we set a new state.

- Inside the `set` we spread the state, and set a `cart` to a `newCart`
- `newCart` is a new array that contains the current state of the cart, plus the `newItem`

```js
    addItemToCart: (params) => {
      const { newItem } = params;
      set((state) => {
        const newCart = [...state.cart, newItem];
        return {
          ...state,
          cart: newCart
        }
      })
    }
```

First method done!

```js
const useCart = create(
  (set, get) => ({
    cart: [],
    product: {},
    addItemToCart: (params) => {
      const { newItem } = params;
      set((state) => {
        const newCart = [...state.cart, newItem];
        return {
          ...state,
          cart: newCart
        }
      })
    },
    
  })
)
```

## Zustand | Creating another method in the objectStore

Now let's create another method called `removeItemFromCart`. Quite similarly to `addItemToCart`, it will take in `params`.

- From `params` we will take extract out the `itemIndex` which will indicate what the index of the item we wish to remove.

- Call the `set` method which will return the `...state` and the `cart` assigned to a `newCart`

- `newCart` will be just the `state.cart.filter()` which will filter out the item we wish to remove

- Inside the `filter`, in the callback function, we will take the `element` & `elementIndex` to return every item whose `elementIndex` is not the same as the `itemIndex`

```js
    removeItemFromCart: (params) => {
      const { itemIndex } = params;
      set((state) => {
        const newCart = state.cart.filter((element, elementIndex) => {
          return elementIndex !== itemIndex;
        });
        return {
          ...state,
          cart: newCart
        }
      })
    }
```

## Empty method

The next method clears out the cart and empties all items. It does not take any parameters, and simply returns the state with the `newCart` being an empty array.

```js
    emptyCart: () => {
      set((state) => {
        const newCart = [];
        return {
          ...state,
          cart: newCart
        }
      })
    }, // end of emptyCart
```

## Set Product method

`setProduct` will take `params` which will contain `newProduct`. We call the `set()` method to return the current state while setting the `product`

```js
    setProduct: (params) => {
      const { newProduct } = params;
      set((state) => {
        return {
          ...state,
          product: newProduct
        }
      })
    },
```

## Export the Object Store

Now that the store is configured, we need to export it. So at the end of the file, put the line:

```js
export default useCart;
```

## Back to `ProductCard`

So now we can access the store in other components.

In `ProductCard.js`

```js
import useCart from './(store)/store';
```

We can set the state to the product that is selected. First let's access the function:

```js
const setProduct = useCart(state => state.setProduct);
```

This will now give us access to the `setProduct` function from the Store. We will use it for the onClick handler `onProductClick`.

```js
  const setProduct = useCart(state => state.setProduct);

  function onProductClick() {
    const newProduct = {};
    setProduct();
    router.push('/product?price_id=' + price_id);
  }
```

We invoke `setProduct`, but first we create the `newProduct` object.

```js
const newProduct = {
  name,
  description,
  price_id,
  cost,
  productInfo
};
```

`newProduct` now contains all the info that we need. We will pass this object into `setProduct`.

```js
  function onProductClick() {
    const newProduct = {
      name,
      description,
      price_id,
      cost,
      productInfo
    };
    setProduct({ newProduct });
    router.push('/product?price_id=' + price_id);
  }
```

This will set `newProduct` to our state and re-route us to a new page. We should be able to click a `ProductInfo` component and get re-navigated, but this time we should have set that state.

Now on the actual `ProductPage` we can access that product!

## Back to `ProductPage`

In `/app/product/page.js`, we can access that `setProduct()`.

First the import:
```js
import useCart from "../(store)/store";
```

Then inside we can access the state and return `state.product`. 

```js
export default function ProductPage(props) {
  const { searchParams, price_id  } = props;

  // Use the hook, select the state and the component will re-render on changes.
  const product = useCart(state => state.product);
  
  // ...
}
```

Assuming that the `setProduct` method works correctly from the store, then we should have access to the product inside `store.js` because the `product: {}` will be set:

```js
const useCart = create(
  (set, get) => ({
    cart: [],
    product: {},
    setProduct: (params) => {
      const { newProduct } = params;
      set((state) => {
        return {
          ...state,
          product: newProduct
        }
      })
    },
```

Now let's log the `product` to see if it all works. So inside `page.js`:

```js
import useCart from "../(store)/store";

export default function ProductPage(props) {
  const { searchParams, price_id  } = props;

  const product = useCart(state => state.product);

  // log the variables
  console.log(searchParams);
  console.log(price_id);
  console.log(product);
```

### Issue: `useRef` only works in Client Components

In the terminal,
```sh
- error node_modules\use-sync-external-store\cjs\use-sync-external-store-shim\with-selector.development.js (51:16) @ useRef
- error useRef only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component
    at ProductPage (./app/product/page.js:13:77)
    at stringify (<anonymous>)
null
```

`ProductPage` is a server rendered component, where it actually has to be a client-rendered component. As we can see from the suggestion from the error: `Add the "use client" directive...`.

We don't really need `ProductPage` to be loaded from the server, so let's just add it to the top of the page:

```js
"use client"
```

### Clicking on the product again

Back to the home page, we click on a product and we don't see anything rendered yet other than the Product Page default text. But if we check the developer tools console:

```sh
Object
page.js:14 undefined
page.js:15 Object
```

We consoled out the object(s):

For `searchParams`, in the line `console.log(searchParams);`

```sh
{
    "price_id": "price_1NHdRIJ4MEfvtz7t6WZZCDKS"
}
```

And as for `page.js:15`, the line `console.log(product);` yields:

```sh
{
    "name": "Premium Pineapple",
    "description": "Only the most organic and freshest pineapple on the market.",
    "price_id": "price_1NHdRIJ4MEfvtz7t6WZZCDKS",
    "cost": 100000,
    "productInfo": {
        "id": "prod_O3kxYAIRht8S59",
        "object": "product",
        "active": true,
        "attributes": [],
        "created": 1686448291,
        "default_price": "price_1NHdRIJ4MEfvtz7t6WZZCDKS",
        "description": "Only the most organic and freshest pineapple on the market.",
        "images": [
            "https://files.stripe.com/links/MDB8YWNjdF8xTkhIelNKNE1FZnZ0ejd0fGZsX3Rlc3RfQU85dnlCOENQS0hJbldMNTNVeGZnNEVX00QLFD33nY"
        ],
        "livemode": false,
        "metadata": {},
        "name": "Premium Pineapple",
        "package_dimensions": null,
        "shippable": null,
        "statement_descriptor": null,
        "tax_code": null,
        "type": "service",
        "unit_label": null,
        "updated": 1686448292,
        "url": null
    }
}
```

Which is awesome. This means **we now have a *Global State* that we can manage, access and/or update from any of our pages!**.

# Set-Up for Checkout Page

Back in the object store, we need to create a method that gives the user a `Modal`.

This `openModal` will have a default value of false. Then we define a method at the top that `setOpenModal` which changes the `openModal` state.

The state variable:
```js
    openModal: false,
```

The method to set the state variable:
```js
    setOpenModal: () => {
      set((state) => {
        return {
          ...state,
          openModal: !state.openModal
        }
      })
    },
```

Together inside the `store`:

```js
const useCart = create(
  (set, get) => ({
    cart: [],
    product: {},
    openModal: false,
    setOpenModal: () => {
      set((state) => {
        return {
          ...state,
          openModal: !state.openModal
        }
      })
    },
    // more methods...
  })
)
```

# Fixing Issue for Nextjs Error 4094 code

When running `npm run dev`, this error pops out:

```sh
[Error: UNKNOWN: unknown error, readlink 'C:\Users\...\GitHub\ecommerce-store-nextjs\.next\server\app-paths-manifest.json'] {
  type: 'Error',
  errno: -4094,
  code: 'UNKNOWN',
  syscall: 'readlink',
  path: 'C:\\Users\\...\\GitHub\\ecommerce-store-nextjs\\.next\\server\\app-paths-manifest.json'
}
```

This happens when you update Nextjs with `npm i next@latest`, and next.js is trying to use parts of a previous build. 

*Solution:* delete to `.next` folder. Then run `npm run dev` again to force nextjs to rebuild everything again. [Stackoverflow response](https://stackoverflow.com/questions/71443635/what-causes-the-npm-error-errno-4094-code-unknown-syscall-readlink)

# **(Technical Debt)** Downside: if we refresh the `ProductPage` we lose access to the store

If we refresh the page with `[F5]`, right after we clicked a `ProductCard` in the home-page and get re-routed, we lose access to the information of that product in the store.

Here is what it says in Chrome Dev Tools console:

```sh
{price_id: 'price_1NHdRIJ4MEfvtz7t6WZZCDKS'}price_id: "price_1NHdRIJ4MEfvtz7t6WZZCDKS"[[Prototype]]: Object
page.js:14 undefined
page.js:15 {}
```

`page.js:15`, the line `console.log(product);` yields an empty object! `{}`.

## Important things to note

> "A crucial part of web applications is that when you hit refresh - you generally get back to the same state"

## Attempt 1: route to the homepage instead of handling the URL context

**The issue with this attempt is that users cannot share URLs to products.**

So inside the `ProductPage`:

- We check if we don't have access to the name of the product. Consequently, that also means we don't have access to the rest of the product.
- Then send the user back to the home page

```js
  if(!product?.name){
    window.location.href = '/';
  }
```

With context:
```js
export default function ProductPage(props) {
  const { searchParams } = props;
  const { price_id } = props;
  const product = useCart(state => state.product);

  if(!product?.name){
    window.location.href = '/';
  }
```

So if we refresh the page, it sends the user back to the home route.

[Stripe API - Retrieving a product](https://stripe.com/docs/api/products/retrieve?lang=node).

## Attempt 2: Refactoring

Some notes:
- In Nextjs, by default all components are server-side rendered.
- Power of Nextjs is when data is fecthed on the server using Server Compoenents. It creates things in advanced rather than on the client. Reduces loading times.
- Can name a file like `page.js` but the functional component inside the file does not have to have that name `ProductPage`.

Refactoring:
- Defining function in a same file does save space, but would like to avoid code reduplication
- **Create a library outside of the `app` directory called `lib`**
- Create a function that we can export, this will be the `getStripeProducts()`


### Using an external library to store functions

So inside `/lib/getStripeProducts.js`:

```js
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
```

### Import the function from external library

At the top of `page.js` inside `/app`, we type "import getStripeProducts" then let VSCode auto-complete from there. As we can see:

```js
import { getStripeProducts } from '@/lib/getStripeProducts';
```

It uses the `@` symbol! This is an "alias" to module paths. 

[Nextjs docs on Absolute Imports and Module Path Aliases](https://nextjs.org/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases).


Now our `page.js` is our server component. It is going to request this as it builds the website.

```js
import ProductCard from './ProductCard';
import { getStripeProducts } from '@/lib/getStripeProducts';

export default async function Home() {
  const products = await getStripeProducts();

  return (
    // ...
  )
}
```

Issue is you can't access these server-side functions on client components as it loses the context to things such as `.env` variables to be able to run the fetch calls to APIs. So this doesn't work `:(`

## Attempt 3 - Using Global Context with NextJS to store the products list

A crucial part of web applications is that when you hit refresh - you generally get back to the same state.

Instead of routing to the homepage, we should handle the URL context. This would allow users to share URLs to products.

The best solution would be to refetch the product on page load on the sub page route, the state is there.

But how do we access that state?

Check this out [Using react context with NextJS13](https://www.js-craft.io/blog/using-react-context-nextjs-13/).

**Let's use [React Context](https://react.dev/reference/react/useContext) and create a `priceList` as the state variable**

```js
"use client"

import { createContext } from "react";

const AppContext = createContext();

export default AppContext;
```

Now try to import to and wrap layout with it:

```js
import { useState, createContext } from 'react';
import AppContext from './context/AppContext';

// ...

export default function RootLayout({ children }) {
  return (
    <AppContext.Provider>
```

### Issue: `createContext` only works in a Client Component but none of its parents are marked

```sh
You're importing a component that needs createContext. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.
```

### Refactor Context to Nextjs 13

So a bit of changes. First update `AppContext`, this creates the React Context Store.

Note the `'use client'` directive that marks the context component as a client one.

```js
'use client'

import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [priceList, setPriceList] = useState(null);

  return (
    <AppContext.Provider value = {{ priceList, setPriceList }}>
      {children}
    </AppContext.Provider>
  )
};

export const useAppContext = () => useContext(AppContext);
```

### Passing React Context to NextJS layouts

In NextJS we have a `RootLayout` component which is the *main layout page*. This is the `layout.js` file under `/app` directory. Let's import our provider and wrap the `{children}`.

In `layout.js`,

```js
import { AppContextProvider } from './context/AppContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      // ...

        <div className="flex-1">
          <AppContextProvider>
            {children}
          </AppContextProvider>
        </div>
      
      // ...
```

**IMPORTANT:** Since we exported AppContext without `default` keyword, this also means that the import is called a [**Named Export**](https://javascript.info/import-export#export-default), so it must be wrapped in `{}` curly braces otherwise you get an error.

You get `Syntax Error`, attempted import errors, even

```sh
Unhandled Runtime Error
NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
```

So make sure you put *curly braces around a named export*.

Now look into how the Context passes things down:

```js
<div className="flex-1">
  <AppContextProvider>
    {children}
  </AppContextProvider>
</div>
```

Note how this works because the `children` property form the layout is later used in the context provider:

```js
// In app/context/AppContext.js
<AppContext.Provider value = {{ priceList, setPriceList }}>
  {children}
</AppContext.Provider>
```

### Using React Context within NextJS 13 pages

Now that the context provider setup is done, final step is to read and update the context values.

Whether its the main page (home page) or sub pages (product pages), they'll have similar code by reading the context value and updating it.

Since they are using hooks, we will need to mark them as client components (via "use client" directive).

```js
"use client"
import { getStripeProducts } from '@/lib/getStripeProducts';
import { useAppContext } from './context/AppContext';

export default async function Home() {
  const products = await getStripeProducts();
  const { priceList, setPriceList } = useAppContext();

  setPriceList(products);

```

There is a problem -> Home needs to be a server-side component because of its call to Stripe API. This has access to the `.env` variables such as the Stripe API key that we need to access the information. So this doesn't work. 

We can however, try passing the products as a prop instead.

Or store the products in the object store of Zustand.

## Storing `products` in Object Store with Zustand

In `store.js`, create a new state called `productList` which will have an initial state of an empty array. 

```js
const useCart = create( (set, get) => ({
    productList: [],
}
```

Then update the state using the set method provided by the store. `set` takes a functio nthe receives the current state as an argument and returns the new state:

```js
const useCart = create(
  (set, get) => ({

    addToProductList: (params) => {
      const { newProduct } = params;
      set((state) => {
        const newProductList = [...state.productList, newProduct];
        return {
          ...state,
          productList: newProductList
        }
      })
    },
  // ...
```

It's good practice to scope these functions in your store so that they can be accessed globally.

Issue, we are running a client side object store to store things that are fetched server-side, but we can't make `Home` component server-side because thats where we fetch prices!

## **Solution to Technical Debt!** - Handle the URL context instead of the re-routing to homepage

---

# Creating the Product Page

Assuming all things work and we are able to get the `product`, let's destructure out the information we need from the product.

```js
  // Destructure the information we need from the product
  const {
    name,
    description,
    cost,
    productInfo,
  } = product;
```

## Styling the Product Page

The layout:

```js
  return(
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
        
      </div>
    </div>
  )
```

Adding the image, name, price and description:
```js
  return(
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
        <div className="md:p-2 shadow">
          <img 
            src={productInfo.images[0]} alt={name} 
            className='w-full h-full object-cover' 
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="flex md:flex-col text-xl md:items-start items-center justify-between">
            <h3>{name}</h3>
            <p>${cost / 100}</p>
          </div>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
```

Some changes to ProductInfo container on the ProductPage:

```js
        <div className="flex flex-col gap-2 p-4">
          <div className="flex md:flex-col text-xl md:items-start items-center
          justify-between gap-2">
            <h3>{name}</h3>
            <p className="md:text-base">${cost / 100}</p>
          </div>
          <p className="text-sm flex-1">{description}</p>
          <button className='bg-slate-700 text-white hover:bg-slate-500
          cursor-pointer ml-auto px-4 py-2'>Add to Cart</button>
        </div>
```

- Added a button below the `description`
- Gave `description` a `flex-1` to push button down to the bottom right

Going to add some more padding to the top component of the Product Page:

```js
  return(
    <div className="flex flex-col p-4">
      // ...
    </div>
  )
}
```

# Working on the Footer

The footer can be found in `layout.js`. Notice that the sub-pages are also wrapped by the layout!

Let's start styling it.

```js
<footer className='flex items-center flex-wrap justify-center
border-t border-solid border-slate-300 p-10'>
  FOOTER
</footer>
```

Added some icons from font-awesome for the footer:

```js
<footer className='flex items-center flex-wrap justify-center
border-t border-solid border-slate-300'>
  <div className="text-2xl">
    <span className="pr-4">FOOTER</span>
    <i className="text-slate-700 hover:text-slate-500 cursor-pointer fa-regular fa-envelope"></i>
    <i className="pl-4 fa-brands fa-github"></i>
  </div>
</footer>
```

Wrapped icons in links:

```js
<Link href={'/'} 
target="_blank" rel="noopener noreferrer">
  <i className="pl-4 fa-brands fa-github text-slate-700 hover:text-slate-500 cursor-pointer"></i>
</Link>
```

[Stackoverflow response on target="_blank" and rel="noopener no referrer"](https://stackoverflow.com/questions/50709625/link-with-target-blank-and-rel-noopener-noreferrer-still-vulnerable), although all current versions of major browsers automatically use this behavior of `rel="noopener"` for any `target="_blank"` see [chromestatus](https://chromestatus.com/feature/6140064063029248). I still include it anyway just to be extra safe.

# Functionality: Add to Cart

In our `Product Page` @ `/app/product/page.js`, let's define a function to make the `Add to Cart` button work.

Find the method we defined in our store and access that function. It is a typical convention to keep the names consistent to what you've saved it as in the store.

```js
const addItemToCart = useCart(state => state.addItemToCart);
```

```js
export default function ProductPage(props) {
  const { searchParams } = props;
  const { price_id } = searchParams;

  const product = useCart(state => state.product);
  const addItemToCart = useCart(state => state.addItemToCart);
  // ...
```

Now create the function that will handle this behavior:
```js
  function handleAddToCart() {

  }
```

Looking back at the store, let's check what it expects:

```js
    addItemToCart: (params) => {
      const { newItem } = params;
      set((state) => {
        const newCart = [...state.cart, newItem];
        return {
          ...state,
          cart: newCart
        }
      })
    }, // end of addItem
```

It expects a `newItem`. 

So let's create that `newItem` object with the properties of `price_id` and `quantity`.

```js
  function handleAddToCart() {
    const newItem = {
      price_id: price_id,
      quantity: 1,
    }
    addItemToCart({newItem});
  }
```

We pass in this `newItem` inside of an object. The store method `addItemToCart` will destructure it and set it to our cart.

## Refactoring the Header

Upon adding the product to the cart, we want the header to update.

Create a new component on the root level called `Header.js`, a react functional component. This will be client-side, so it should have the `"use client"` directive at the top.

In `layout.js` let's move the header logic, so all the code contained within the `<header>` tag and put it as the return value of the `Header.js` component. Remember to import the `Link`.

```js
"use client"
import React from 'react';
import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex items-center justify-between sticky
    top-0 p-6 bg-slate-200 border-b border-solid border-blue-900
    shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8'>
      <Link href={'/'}>
        <h1 className='uppercase cursor-pointer hover:scale-110'>Shop</h1>
      </Link>
        <i className="fa-solid fa-cart-shopping cursor-pointer
          hover:text-slate-500"></i>
    </header>
  )
}
```

And substitute the header logic with a component in `layout.js`:

```js
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <link rel="stylesheet" href="..." />
      </head>

      <body className={'min-h-screen flex flex-col relative ' + inter.className}>

        <Header />

        <div className="flex-1">
          {children}
        </div>
```

## Updating the Header on Add to Cart

Now that the `Header` logic is in a separate place, what this allows us to do is avoid polluting the `layout.js` when we want to add specific logic to the `Header`.

We can now import our store and access our cart items:

```js
import useCart from './(store)/store';

export default function Header() {
  const cartItems = useCart(state => state.cart);
```

We access the state and return `state.cart`.

### Updating the cart icon

We are going to wrap the cart icon in a div. This div will also contain a *conditional render* of another `div` containg the number of `cartItems`.

```js
      <div className="relative grid place-items-center">
        {cartItems.length > 0 && (
          <div className="absolute top-0 right-0">
            <p>{cartItems.length}</p>
          </div>
        )}
        <i className="fa-solid fa-cart-shopping cursor-pointer
          hover:text-slate-500"></i>
      </div>
```

Let's work on the conditional render. For styling purposes, let's set that condition to true:

```js
        {true > 0 && (
          <div className="absolute bg-blue-400 text-white rounded-full top-0 right-0">
            <p>{cartItems.length}</p>
          </div>
        )}
```

It looks ridiculous, so let's fix it.

Going to add these utility classes to the `div` to create a blue circlular background that will contain the number. It should be centered.

```js
<div className="absolute aspect-square h-6 grid place-items-center
  bg-blue-400 text-white rounded-full top-0 right-0">
```

Now we have to move it with to the top right of the cart by giving it a `-translate-y-full translate-x-full`.

After that we see that it moves it too far out, so let's adjust by 1/2.

Adjust the text-size of the `p` within to small and tune it down to `h-5` and it is just right.

```js
<div className="absolute aspect-square h-5 grid place-items-center
  bg-blue-400 text-white rounded-full top-0 right-0
  -translate-y-1/2 translate-x-1/2">
  <p className='text-sm'>{cartItems.length}</p>
</div>
```

Now revert the conditional from `true` to `cartItems.length > 0`. Now the numbers icon will conditionally render when items are added to the cart.

### Responsive cart icon and group hover

Going to make the size a bit better on mobile. Also going to give the `div` container a group with the icon. Giving icon `group` means it will listen to the parent hover state, changing its opacity.

```js
<div className="relative cursor-pointer group grid place-items-center">
  {cartItems.length > 0 && (
    <div className="absolute aspect-square pointer-events-none h-5 sm:h-6
      grid place-items-center
      bg-blue-400 text-white rounded-full top-0 right-0
      -translate-y-1/2 translate-x-1/2">
      <p className='text-xs sm:text-sm'>{cartItems.length}</p>
    </div>
  )}
  <i className="fa-solid fa-cart-shopping cursor-pointer
    group-hover:hover:text-slate-500"></i>
</div>
```

# Modal to display Cart

Create a react functional component called `Modal.js` inside `/app`. It will work on the client-side.

```js
"use client"
import React from 'react';

export default function Modal() {
  return (
    <div>Modal</div>
  )
}
```

We are going to render this Modal to a different part of the DOM so we are going to be using [React Portal](https://react.dev/reference/react-dom/createPortal).

In `layout.js`, right before the end of `body` tag, add a `div` with id of portal. This is where we will mount the modal.

```js
      // ...
        <div id="portal"></div>
      </body>
    </html>
  )
}
```

Back in the `Modal`, import exactly this:

```js
import { createPortal } from 'react-dom';
```

Then render the `Modal` to different place in the DOM:

```js
export default function Modal() {
  return ( createPortal(
    <div>Modal</div>,
    document.getElementById('portal')
  ))
}
```

In Header let's add the Modal state value.

```js
import Modal from './Modal';

export default function Header() {
  const cartItems = useCart(state => state.cart);
  const openModal = useCart(state => state.openModal);

  return (
    <header className='flex items-center justify-between sticky
    top-0 p-6 bg-slate-200 border-b border-solid border-blue-900
    shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8'>

      {openModal && (
        <Modal />
      )}
```

In the store, set the state variable of `openModal` to `true` temporarily to see it rendered in the Elements. 

```js
    openModal: true,
```

Press developer tools, inside the body the last thing before scripts should be the `portal` div with `Modal` rendered out.

Right now it should be rendered at the bottom of the screen page. 

Since it is rendered in relation to the body of the document, you can style it.

```js
export default function Modal() {
  return ( createPortal(
    <div className='fixed top-0 left-0 w-screen h-screen z-50'>
      <div className="bg-transparent absolute inset-0"></div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <h1>Cart</h1>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  ))
}
```

We want the modal to cover the entire page with a high z-index. 

```js
    <div className='fixed top-0 left-0 w-screen h-screen z-50'>
```

Then first `div` within will be a transparent one that occupies the entire parent container with `absolute` and `inset-0`. This will close the modal.

```js
      <div className="bg-transparent absolute inset-0"></div>
```

Next is the contents of the modal. It will be `flex-col`. It will contain the `Cart`.

```js
      <div className="flex flex-col gap-4 p-4">
        <div>
          <h1>Cart</h1>
        </div>
      </div>
```

## Further styling, version 1

```js
    <div className='fixed top-0 left-0 w-screen h-screen z-50'>
      <div className="bg-transparent absolute inset-0"></div>
      <div className="flex flex-col bg-white absolute 
      right-0 top-0 h-screen w-screen max-w-screen shadow-lg sm:w-96 gap-4">
        <div className='flex items-center p-6 justify-between text-xl relative'>
          <h1>Cart</h1>
          <i className="fa-solid fa-xmark"></i>
          <div className="absolute bottom-0 left-1/2-translate-x-1/2 h-[1px] w-2/3
          bg-slate-300"></div>
        </div>
      </div>
    </div>,
```

- Added an `icon` with x mark
- Added another `div` under icon which is just a line to comparmentalize

## Closing the Cart Modal

Remember that the 2nd `div`:

```js
<div className="bg-transparent absolute inset-0"></div>
```

Occupies invisibily everywhere else that isn't the Cart modal. We are going to listen to any events that click on this background. So if user clicks outside of the Cart modal, it closes it.

In other words, this is the backdrop. 

The other case to close the Cart Modal is when user clicks on the icon.

So let's add the `closeModal` function from the state, and apply the `onClick` handler to both of these elements.

```js
import useCart from './(store)/store';

export default function Modal() {
  const closeModal = useCart(state => state.setOpenModal);

  return ( createPortal(
    // ...
      <div onClick={closeModal} className="bg-transparent absolute inset-0"></div>
    // ...
          <i onClick={closeModal} className="fa-solid fa-xmark"></i>
    // ...
    ))
}
```

## More ways to Open the Modal

In Header, when we click the cart icon we expect to open the Cart Modal.

We should set the `state` value of the `openModal` by using `setOpenModal` function as the onClick handler.

```js

export default function Header() {
  const cartItems = useCart(state => state.cart);

  const openModal = useCart(state => state.openModal);
  const setOpenModal = useCart(state => state.setOpenModal);

    return (
      // ..

      <div onClick = {setOpenModal} className="relative cursor-pointer group
      grid place-items-center">
        {cartItems.length > 0 && (

      // ...
```

## Display Cart Items inside Cart Modal

First lets grab the cartItems from the state

```js
  const cartItems = useCart(state => state.cart);
```

Then create a `div` to contain the `cartItems`. Conditionally render them. If there are no items, then some message. If there are items, then map out each cartItem inside a React fragment. Rough draft:

```js
<div>
  {cartItems.length === 0 ? (
    <p>There is nothing in your cart {":("}</p>
  ) : (
    <>
    </>
  )}
</div>
```

Map out all the cart items if length is not 0.

```js
{cartItems.length === 0 ? (
  <p>There is nothing in your cart {":("}</p>
) : (
  <>
    {cartItems.map((cartItem, itemIndex) => {
      return (
        <div key={itemIndex}>{cartItem}</div>
      )
    })}
  </>
)}
```

Currently, the issue is that when we set it we are only setting the `price_id` and `quantity`. We also need to set the `name` as well. 

So in `/app/(store)/page.js`, in the Product Page, add the name to the `newItem` object within the handler:

```js
  function handleAddToCart() {
    const newItem = {
      price_id: price_id,
      quantity: 1,
      name
    }
    addItemToCart({newItem});
  }
```

So now we can access the name. Now we can render out the name in the Cart Modal:

```js
<>
  {cartItems.map((cartItem, itemIndex) => {
    return (
      <div key={itemIndex}>{cartItem.name}</div>
    )
  })}
</>
```

Let's also add the `cost` so we can calculate the total cost.

```js
  function handleAddToCart() {
    const newItem = {
      price_id: price_id,
      quantity: 1,
      name,
      cost
    }
    addItemToCart({newItem});
  }
```

Style the mapping a bit more while rendering extra information of the cart item:

```js
<>
  {cartItems.map((cartItem, itemIndex) => {
    return (
      <div key={itemIndex} className='flex flex-col gap-2 px-2 
      border-l border-solid border-slate-700'>
        <div className="flex items-center justify-between">

          <h2>{cartItem.name}</h2>
          <p>${cartItem.cost / 100}</p>
        </div>
        <p>Quantity: 1</p>
      </div>
    )
  })}
</>
```

Give `overflow-scroll` and `flex-1` to `div` container for cartItems:

``js
<div className='p-4 flex flex-col flex-1 gap-4 overflow-scroll'>
  {cartItems.length === 0 ? (
```

## Checkout button for Modal

Let's add the checkout button at the end:

```js
<div className="border border-solid border-slate-700 text-xl m-4 p-6 
uppercase grid place-items-center hover:opacity-60 cursor-pointer">
  Checkout
</div>
```

# Creating API routes in Nextjs

Nextjs serves up a Nodejs back-end.

[API Routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes).

Create folder `api` under `/app`. Inside we create the back-end route that handles the `checkout`.

The file will be named `checkout.js`.

Inside we can make a simple route:

```js
export async function GET(request) {
  return new Response('Hello!');
}
```

Let's change it to a `POST` route, and access the body of the request. Lastly, we should send back a status code of some sort:

```js
export async function POST(req, res) {
  const body = JSON.parse(req.body);

  return new res.sendStatus(405);
}
```

Here is what we do, we will have the `body` store a property called `lineItems`.

We check if `lineItems` length is 0, then send a status of [HTTP 405 - Method Not Allowed](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405).

Otherwise, in a `try..catch`, initialize `stripe` and create a checkout [session](https://stripe.com/docs/api/checkout/sessions) to create a payment system. This will take in an object that has props for `success_url`, `cancel_url`, `line_items`, and `mode`.

At the end of the try, respond with a status of `201` along with the session parsed in json.

```js
  if(body.lineItems.length === 0){
    return new res.sendStatus(405);
  }

  try{
    // Initialize Stripe
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
      apiVersion: '2020-08-27'
    });

    const session = await stripe.checkout.sessions.create({
      
    })

    return res.status(201).json({ session });

  } catch(err) {
    console.log("error on checkout");
  }
```

Filling out the `session`:

```js
const session = await stripe.checkout.sessions.create({
  success_url: 'http://localhost:3000/success',
  cancel_url: 'http://localhost:3000/cancel',
  line_items: body.lineItems,
  mode: 'payment'
})
```

For the `catch`, log the error and send a generic server error as response:

```js
catch(err) {
    console.log("error on checkout");
    console.log(err);
    res.sendStatus(500);
  }
```

## Construct checkout in Modal

Create an `async` function named `checkout` in `Modal.js`

```js
  async function checkout(){
    const lineItems = cartItems.map(cartItem => {
      return {
        price: cartItem.price_id,
        quantity: 1
      }
    })
    const res = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({ lineItems })
    })
    const data = await res.json();
  }
```

This will map out each cartItem into `lineItems` containing the `price` and `quantity`. 

Then we `fetch` at the url `/api/checkout` with a `POST` method, meanwhile setting the body to that of `lineItems` object. This will be stored in `res`.

Then `data` variable will be the result of the response or `res`.