// store/cart.store.ts

import { Product } from '@/model/product';
import { create } from 'zustand';

export interface CartState {
  list: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
}

export const useCart = create<CartState>((set, get) => ({
  list: [],
  addToCart: (productToAdd: Product) => {
    set(state => ({
      list: [...state.list, productToAdd]
    }))
  },
  removeFromCart: (productToRemove: Product) => {
    set(state => ({
      list: state.list.filter(p => p.id !== productToRemove.id)
    }))

  },
  clearCart: () => {
    set(state => ({ list: [] }))},
}))
