import { useContext } from 'react'
import { PostsContext } from '../../../contexts/PostsContext'
import { PostCard } from './PostCard'

export function PostsList() {
  const { userPosts } = useContext(PostsContext)

  return (
    <main className="flex flex-wrap gap-8 w-[54rem] mt-12 m-auto mb-[14.625rem]">
      {userPosts.map((post) => {
        return <PostCard key={post.id} post={post} />
      })}
    </main>
  )
}
