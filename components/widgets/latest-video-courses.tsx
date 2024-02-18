// /components/widget/latest-video-courses.tsx
const videos = [
  {
    id: 1,
    name: 'Angular Evolution'
  },
  {
    id: 2,
    name: 'React Pro'
  },
  {
    id: 3,
    name: 'Cypress'
  },
]

export default function LatestVideoCourses() {

  return <div>
    <h1 className="widget-title">VIDEO COURSES</h1>

    {
      videos?.slice(0, 3).map((post) => {
        return <div key={post.id} className="item">
          {post.name}
        </div>
      })
    }
  </div>
}
