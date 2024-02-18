// app/shop/ssg/[id]/page.tsx
import { getProduct, getProducts } from '@/api/products.api';
import { Product, TOPIC_IMAGES } from '@/model/product';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())
  const products = await getProducts();

  return products.map((p) => ({
    id: p.id.toString()
  }))

}


export default async function ProductStatic({ params }: { params: { id: string }}) {
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
    </div>
  </div>


}
