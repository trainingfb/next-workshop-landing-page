// /api/devto-posts.api.ts

import { DevToPost } from '@/model/devto-post';

export async  function getDevToPosts(): Promise<DevToPost[]> {
  const res = await fetch(
    'https://dev.to/api/articles?username=fabiobiondi',
  );
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await res.json()
}
