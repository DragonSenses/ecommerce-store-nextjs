"use client"
import React from 'react';
import { createPortal } from 'react-dom';

export default function Modal() {
  return ( createPortal(
    <div>Modal</div>,
    document.getElementById('portal')
  ))
}
