import { Route, Routes } from 'react-router-dom'
import { Movies } from './pages/movies'
import { Studio } from './pages/studio'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/studio" element={<Studio />} />
    </Routes>
  )
}
