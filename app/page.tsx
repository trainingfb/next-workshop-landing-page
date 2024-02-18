// app/page.tsx
import { getDevToPosts } from '@/api/devto-posts.api';
import { getYouTubeVideos } from '@/api/youtube-videos.api';
import Newsletter from '@/components/widgets/newsletter';
import Stats from '@/components/widgets/Stats';
import Hero from '@/components/widgets/hero';
import LatestPosts from '@/components/widgets/latest-posts';
import LatestVideoCourses from '@/components/widgets/latest-video-courses';
import LatestVideos from '@/components/widgets/latest-videos';
import { Suspense } from 'react';

export default async function Home() {
  const videos = getYouTubeVideos();
  const posts =  getDevToPosts()

  return (
    <div>
      <div className="">
        <Hero />
      </div>

      <div className="flex gap-6 my-6">
        <div className="w-1/3">

          {/*NEW*/}
          <Suspense fallback={<Skeleton />}>
            <LatestVideos promise={videos} />
          </Suspense>
        </div>

        <div className="w-1/3">
          {/*NEW*/}
          <Suspense fallback={<Skeleton />}>
            <LatestPosts promise={posts}/>
          </Suspense>
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

// https://flowbite.com/docs/components/skeleton/
function Skeleton() {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
