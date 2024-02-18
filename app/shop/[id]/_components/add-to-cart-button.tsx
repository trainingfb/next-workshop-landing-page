// app/shop/[id]/_components/add-to-cart-button.tsx

'use client'

interface AddToCartButton {
  product: Product
}

import { Product } from '@/model/product';
import { useCart } from '@/store/cart.store';

export default function AddToCartButton (props: AddToCartButton) {
  const addToCart = useCart(state => state.addToCart)

  return <button
    className="bg-sky-600 p-2 rounded-xl hover:bg-sky-700 transition"
    onClick={() => addToCart(props.product)}>
    AddToCartButton
  </button>
};
