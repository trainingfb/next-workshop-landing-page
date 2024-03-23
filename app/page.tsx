// app/page.tsx
import { getDevToPosts } from '@/api/devto-posts.api';
import Newsletter from '@/components/widgets/newsletter';
import Hero from '@/components/widgets/hero';
import LatestPosts from '@/components/widgets/latest-posts';
import LatestVideoCourses from '@/components/widgets/latest-video-courses';
import LatestVideos from '@/components/widgets/latest-videos';

export default async function Home() {
  const posts =  getDevToPosts()

  return (
    <div>
      <div>
        <Hero />
      </div>

      <div className="flex gap-6 my-6 h-36">
        <div className="w-1/3 bg-slate-700">
          <LatestVideos />
        </div>

        <div className="w-1/3 bg-slate-700">
          <LatestPosts />
        </div>
        <div className="w-1/3 bg-slate-700">
          <LatestVideoCourses/>
        </div>
      </div>

      <div className="flex gap-6 my-6 bg-slate-700 h-36">
        <Newsletter/>
      </div>
    </div>
  );
}
