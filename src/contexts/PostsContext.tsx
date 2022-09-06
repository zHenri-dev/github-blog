import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

export interface Post {
  id: number
  url: string
  title: string
  content: string
  createdAt: Date
  comments: number
}

interface PostsContextType {
  userPosts: Post[]
  fetchPosts: (query?: string) => Promise<void>
  getPostById: (id: number) => Promise<Post | undefined>
}

export const PostsContext = createContext({} as PostsContextType)

interface PostsProviderProps {
  children: ReactNode
}

export function PostsProvider({ children }: PostsProviderProps) {
  const githubRepo = import.meta.env.VITE_GITHUB_REPO
  const [userPosts, setUserPosts] = useState<Post[]>([])

  const fetchPosts = useCallback(
    async (query?: string) => {
      if (!query) {
        const response = await api.get(
          `https://api.github.com/repos/${githubRepo}/issues`,
        )

        const formattedPosts: Post[] = response.data.map((post: any) => {
          const formattedPost: Post = {
            id: post.id,
            url: post.html_url,
            title: post.title,
            content: post.body,
            createdAt: new Date(post.created_at),
            comments: post.comments,
          }

          return formattedPost
        })

        setUserPosts(formattedPosts)
      } else {
        const response = await api.get(`https://api.github.com/search/issues`, {
          params: {
            q: `${query} repo:${githubRepo}`,
          },
        })

        const formattedPosts: Post[] = response.data.items.map((post: any) => {
          const formattedPost: Post = {
            id: post.id,
            url: post.html_url,
            title: post.title,
            content: post.body,
            createdAt: new Date(post.created_at),
            comments: post.comments,
          }

          return formattedPost
        })

        setUserPosts(formattedPosts)
      }
    },
    [githubRepo],
  )

  const getPostById = useCallback(
    async (id: number) => {
      return userPosts.find((post) => post.id === id)
    },
    [userPosts],
  )

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider value={{ userPosts, fetchPosts, getPostById }}>
      {children}
    </PostsContext.Provider>
  )
}
