import { useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Post, PostsContext } from '../../contexts/PostsContext'
import { IssueInfo } from './components/IssueInfo'
import { IssueMarkdown } from './components/IssueMarkdown'

export function Issue() {
  const { getPostById } = useContext(PostsContext)
  const [searchParams] = useSearchParams()
  const [post, setPost] = useState<Post | undefined>(undefined)
  const navigate = useNavigate()

  const id = searchParams.get('id')

  useEffect(() => {
    if (!id || !parseInt(id)) navigate('/')
    else {
      getPostById(parseInt(id)).then((post) => setPost(post))
    }
  }, [id, navigate, getPostById])

  return (
    <>
      {post && (
        <>
          <IssueInfo post={post} />
          <IssueMarkdown content={post?.content} />
        </>
      )}
    </>
  )
}
