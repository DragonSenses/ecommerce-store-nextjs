"use client"
import React from 'react';
import Link from 'next/link';
import useCart from './(store)/store';

export default function Header() {
  const cartItems = useCart(state => state.cart);

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
