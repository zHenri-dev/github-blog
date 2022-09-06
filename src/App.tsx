import { BrowserRouter } from 'react-router-dom'
import { PostsProvider } from './contexts/PostsContext'
import { Router } from './Router'

import './styles/global.css'

export function App() {
  return (
    <BrowserRouter>
      <PostsProvider>
        <Router />
      </PostsProvider>
    </BrowserRouter>
  )
}
