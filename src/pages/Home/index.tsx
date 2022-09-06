import { UserInfo } from './components/UserInfo'
import { PostsHeader } from './components/PostsHeader'
import { PostsList } from './components/PostsList'

export function Home() {
  return (
    <>
      <UserInfo />
      <PostsHeader />
      <PostsList />
    </>
  )
}
