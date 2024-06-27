import { Route, Routes } from 'react-router-dom'
import { Movies } from './pages/movies'
import { Studio } from './pages/studio'
import { NotFound } from './pages/not-found'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}
