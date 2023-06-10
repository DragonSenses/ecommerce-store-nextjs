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

