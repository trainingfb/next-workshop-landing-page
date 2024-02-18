// app/shop/[id]page.tsx
import { getProduct } from '@/api/products.api';
import AddToCartButton from '@/app/shop/[id]/_components/add-to-cart-button';
import { TOPIC_IMAGES } from '@/model/product';
import { useCart } from '@/store/cart.store';
import Image from 'next/image';

export default async function Product({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  return <div>
    ID: {params.id}
    <div className="flex flex-col items-center gap-3">

      <Image
        src={TOPIC_IMAGES[product.topic]}
        alt="Fabio Biondi emote"
        width={300}
      />

      <h1 className="text-4xl">{product.name}</h1>
      <div>Topic: {product.topic}</div>

      <AddToCartButton
        product={product}
      />
    </div>
  </div>

}
