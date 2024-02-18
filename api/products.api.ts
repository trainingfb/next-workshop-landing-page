// /api/products.api.ts
import { Product } from '@/model/product';

export async  function getProducts(): Promise<Product[]> {
  const res = await fetch(
    'https://json-server-vercel-for-tutorials.vercel.app/video-courses',
  );
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return await res.json()
}

export async  function getProduct(id: string): Promise<Product> {
  const res = await fetch(
    `https://json-server-vercel-for-tutorials.vercel.app/video-courses/${id}`,
  );
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return await res.json()
}

export async  function searchProduct(query: string): Promise<Product[]> {
  const res = await fetch(
    `https://json-server-vercel-for-tutorials.vercel.app/video-courses?q=${query}`,
  );
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return await res.json()
}

export async  function searchByTopicProduct(topic: string): Promise<Product[]> {
  const res = await fetch(
    `https://json-server-vercel-for-tutorials.vercel.app/video-courses?topic=${topic}`,
  );
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return await res.json()
}
