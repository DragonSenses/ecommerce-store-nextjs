"use client"
import React from 'react';
import { createPortal } from 'react-dom';

export default function Modal() {
  return ( createPortal(
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
    document.getElementById('portal')
  ))
}
