import { create } from 'zustand';

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