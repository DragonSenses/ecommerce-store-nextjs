"use client"
import React from 'react';
import { createPortal } from 'react-dom';

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
