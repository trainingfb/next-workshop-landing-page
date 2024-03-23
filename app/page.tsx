// app/page.tsx
import { getDevToPosts } from '@/api/devto-posts.api';
import { getYouTubeVideos } from '@/api/youtube-videos.api';
import Newsletter from '@/components/widgets/newsletter';
import Hero from '@/components/widgets/hero';
import LatestPosts from '@/components/widgets/latest-posts';
import LatestVideoCourses from '@/components/widgets/latest-video-courses';
import LatestVideos from '@/components/widgets/latest-videos';

export default async function Home() {
  const posts =  getDevToPosts()

  return (
    <div>
      <div className="">
        <Hero />
      </div>

      <div className="flex gap-6 my-6">
        <div className="w-1/3">
          <LatestVideos />
        </div>

        <div className="w-1/3">
          <LatestPosts />
        </div>
        <div className="w-1/3">
          <LatestVideoCourses/>
        </div>
      </div>

      <div className="flex gap-6 my-6">
        <Newsletter/>
      </div>
    </div>
  );
}
