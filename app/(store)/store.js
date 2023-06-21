import { create } from 'zustand';

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
    setProduct: (params) => {
      const { newProduct } = params;
      set((state) => {
        return {
          ...state,
          product: newProduct
        }
      })
    },
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
    }, // end of removeItem
    emptyCart: () => {
      set((state) => {
        const newCart = [];
        return {
          ...state,
          cart: newCart
        }
      })
    }, // end of emptyCart
  })
)

export default useCart;