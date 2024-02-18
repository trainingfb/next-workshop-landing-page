// /api/youtube-videos.api.ts

import { YoutubeVideo } from '@/model/youtube-video';

export async function getYouTubeVideos(): Promise<YoutubeVideo[]> {

  const res = await fetch(
    'https://json-server-vercel-for-tutorials.vercel.app/youtube-videos',
    {
      cache: 'no-store',
      /*next: { revalidate: 5 }*/
    }
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return res.json();
}
