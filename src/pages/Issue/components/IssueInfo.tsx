import { Link } from 'react-router-dom'
import { Post } from '../../../contexts/PostsContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {
  FaChevronLeft,
  FaLink,
  FaGithub,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa'

interface IssueInfoProps {
  post: Post
}

export function IssueInfo({ post }: IssueInfoProps) {
  const githubUser = import.meta.env.VITE_GITHUB_USER

  const publishedDataRelativeToNow = formatDistanceToNow(post.createdAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <div className="w-[54rem] bg-dark-blue-700 m-auto -mt-20 p-8 rounded-[10px] flex flex-col gap-5">
      <div className="flex justify-between items-center text-blue-500 uppercase font-bold text-xs">
        <Link
          to="/"
          className="flex gap-2 items-center border-b border-b-transparent hover:border-b-blue-500"
        >
          <FaChevronLeft scale={18} />
          Voltar
        </Link>
        <a
          className="flex gap-2 items-center border-b border-b-transparent hover:border-b-blue-500"
          href={post.url}
          target="_blank"
          rel="noreferrer"
        >
          Ver no Github
          <FaLink scale={18} />
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-dark-blue-50 text-2xl font-bold">
          {post.title}
        </span>
        <div className="flex gap-8 text-dark-blue-300">
          <span className="flex gap-2 items-center">
            <FaGithub scale={18} />
            {githubUser}
          </span>
          <span className="flex gap-2 items-center">
            <FaCalendarDay scale={18} />
            {publishedDataRelativeToNow}
          </span>
          <span className="flex gap-2 items-center">
            <FaComment scale={18} />
            {post.comments} {post.comments !== 1 ? 'comentários' : 'comentário'}
          </span>
        </div>
      </div>
    </div>
  )
}
