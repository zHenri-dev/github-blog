import { useContext } from 'react'
import { PostsContext } from '../../../contexts/PostsContext'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const searchFormSchema = zod.object({
  searchText: zod.string(),
})

type searchFormInputs = zod.infer<typeof searchFormSchema>

export function PostsHeader() {
  const { userPosts, fetchPosts } = useContext(PostsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearch(data: searchFormInputs) {
    if (isSubmitting) return

    await fetchPosts(data.searchText)
  }

  return (
    <div className="mt-[4.5rem] w-[54rem] m-auto flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-dark-blue-100 text-lg font-bold">
          Publicações
        </span>
        <span className="text-dark-blue-300 text-sm">
          {userPosts.length}{' '}
          {userPosts.length === 1 ? 'publicação' : 'publicações'}
        </span>
      </div>

      <form onSubmit={handleSubmit(handleSearch)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          className="rounded-md px-4 py-3 w-full bg-dark-blue-900 border border-dark-blue-500 text-dark-blue-200 focus:shadow-transparent focus:border-blue-500"
          {...register('searchText', {
            onBlur: handleSubmit(handleSearch),
          })}
        />
      </form>
    </div>
  )
}
