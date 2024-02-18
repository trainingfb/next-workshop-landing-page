// /components/widget/latest-posts.tsx
import { DevToPost } from '@/model/devto-post';

export default async function LatestPosts({ promise }: { promise: Promise<DevToPost[]> }) {
  const posts = await promise;

  return <div>
    <h1 className="widget-title">LATEST POSTS</h1>

    {
      posts?.slice(0, 3).map((post) => {
        return <div key={post.id} className="item">
         {post.title}
        </div>
      })
    }
  </div>
}
