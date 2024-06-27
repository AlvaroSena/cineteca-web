import { Route, Routes } from 'react-router-dom'
import { Movies } from './pages/movies'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
    </Routes>
  )
}
