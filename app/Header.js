"use client"
import React from 'react';
import Link from 'next/link';
import useCart from './(store)/store';
import Modal from './Modal';

export default function Header() {
  const cartItems = useCart(state => state.cart);
  const openModal = useCart(state => state.openModal);
  const setOpenModal = useCart(state => state.setOpenModal);

  return (
    <header className='flex items-center justify-between sticky
    top-0 p-6 bg-slate-200 border-b border-solid border-blue-900
    shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8'>

      {openModal && (
        <Modal />
      )}

      <Link href={'/'}>
        <h1 className='uppercase cursor-pointer hover:scale-110'>Shop</h1>
      </Link>
      <div onClick = {setOpenModal} className="relative cursor-pointer group
      grid place-items-center">
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
    </header>
  )
}
