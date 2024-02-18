// app/shop/page.tsx
import { getProducts, searchProduct } from '@/api/products.api';
import Search from '@/app/shop/search';
import { TOPIC_IMAGES } from '@/model/product';

import Image from 'next/image';
import Link from 'next/link';

export default async function Shop({
  searchParams
}: {
  searchParams: {
    query?: string
  }
}) {
  const query = searchParams?.query || '';

  const products = await searchProduct(query)

  return (
    <div>
      <h1 className="widget-title">Shop</h1>
      <Search placeholder="Search" />

      <div className="grid grid-cols-3 gap-6 ">
      {
        products?.map((p) => {
          return <Link href={`/shop/${p.id}`}  key={p.id} >
            <div className="flex flex-col items-center gap-3 border border-slate-700 rounded-xl p-4 hover:bg-slate-800 transition">

              <Image
                src={TOPIC_IMAGES[p.topic]}
                alt="Fabio Biondi emote"
                width={100}
              />

              {p.name}

            </div>
          </Link>
        })
      }
      </div>
    </div>
  );
}
