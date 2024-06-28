import { Route, Routes } from 'react-router-dom'
import { Movies } from './pages/movies'
import { Studio } from './pages/studio'
import { NotFound } from './pages/not-found'
import { MoviesByGenre } from './pages/movies-by-genre'
import { Search } from './pages/search'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/genre/:genre" element={<MoviesByGenre />} />
      <Route path="/search" element={<Search />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}
