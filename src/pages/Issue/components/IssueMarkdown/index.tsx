import ReactMarkdown from 'react-markdown'
import './styles.css'

interface IssueMarkdownProps {
  content: string
}

export function IssueMarkdown({ content }: IssueMarkdownProps) {
  return (
    <div className="w-[54rem] m-auto mb-32 px-8 py-10">
      <ReactMarkdown className="markdown text-dark-blue-50">
        {content}
      </ReactMarkdown>
    </div>
  )
}
