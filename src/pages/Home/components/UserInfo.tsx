import { useEffect, useState } from 'react'
import { FaGithub, FaBuilding, FaUsers, FaLink } from 'react-icons/fa'

import { api } from '../../../lib/axios'

interface GithubUser {
  name: string
  username: string
  bio: string
  avatarURL: string
  company: string
  followers: number
}

export function UserInfo() {
  const githubUser = import.meta.env.VITE_GITHUB_USER
  const [userData, setUserData] = useState<GithubUser | null>(null)

  useEffect(() => {
    api.get(`https://api.github.com/users/${githubUser}`).then((response) => {
      const data = response.data

      setUserData({
        name: data.name,
        username: githubUser,
        bio: data.bio,
        avatarURL: data.avatar_url,
        company: data.company,
        followers: data.followers,
      })
    })
  }, [githubUser])

  return (
    <div className="flex justify-center p-8 bg-dark-blue-700 w-[54rem] m-auto -mt-20 rounded-[10px] gap-8">
      <img
        src={userData?.avatarURL}
        alt=""
        className="w-[9.25rem] h-auto rounded-lg"
      />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <span className="text-2xl text-dark-blue-50 font-bold">
              {userData?.name}
            </span>
            <a
              href="https://github.com/zHenri-dev"
              target="_blank"
              className="uppercase text-xs flex gap-2 items-center text-blue-500 font-bold border-b border-b-transparent hover:border-b-blue-500"
              rel="noreferrer"
            >
              Github
              <FaLink scale={18} />
            </a>
          </div>
          <p className="text-dark-blue-200">{userData?.bio}</p>
        </div>
        <div className="flex gap-6 text-dark-blue-100">
          <span className="flex gap-2 items-center">
            <FaGithub scale={18} />
            {userData?.username}
          </span>
          {userData?.company && (
            <span className="flex gap-2 items-center">
              <FaBuilding scale={18} />
              {userData.company}
            </span>
          )}
          <span className="flex gap-2 items-center">
            <FaUsers scale={18} />
            {userData?.followers}{' '}
            {userData?.followers !== 1 ? 'seguidores' : 'seguidor'}
          </span>
        </div>
      </div>
    </div>
  )
}
