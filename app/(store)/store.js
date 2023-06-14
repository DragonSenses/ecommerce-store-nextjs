import { create } from 'zustand';

const useCart = create(
  (set, get) => ({
    cart: [],
    product: {},
    
  })
)