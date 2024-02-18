// /components/widget/latest-videos.tsx
import { YoutubeVideo } from '@/model/youtube-video';
import Image from 'next/image';

export default async function LatestVideos({ promise }: { promise: Promise<YoutubeVideo[]> }) {
  const videos = await promise;

  return <div>
    <h1 className="widget-title">LATEST VIDEOS</h1>

    <div className="grid grid-cols-2 gap-3">
    {
      videos?.slice(0, 4).map((video) => {
        const url = `https://www.youtube.com/watch?v=${video.id}`;
        const tmb = `https://img.youtube.com/vi/${video.id}/0.jpg`;

        return <a href={url} key={video.id}>
          <Image src={tmb} alt="" width={200} height={160}/>
        </a>
      })
    }
    </div>

  </div>
}
