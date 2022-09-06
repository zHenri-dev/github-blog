import { Link } from 'react-router-dom'
import { Post } from '../../../contexts/PostsContext'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const publishedDataRelativeToNow = formatDistanceToNow(post.createdAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <Link
      to={`/issue?id=${post.id}`}
      className="w-[26rem] bg-dark-blue-600 p-8 flex flex-col gap-5 rounded-[10px] cursor-pointer transition-colors border-2 border-transparent hover:border-dark-blue-400"
    >
      <div className="flex gap-4">
        <span className="text-dark-blue-50 text-xl font-bold">
          {post.title}
        </span>
        <span className="text-dark-blue-300 text-sm whitespace-nowrap">
          {publishedDataRelativeToNow}
        </span>
      </div>
      <p className="text-dark-blue-200 h-[6.25rem] line-clamp-4 text-ellipsis">
        {post.content.replaceAll('*', '')}
      </p>
    </Link>
  )
}
