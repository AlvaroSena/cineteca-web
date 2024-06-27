import { Movie } from '../types/Movie'
import { api } from './api'

interface GetMoviesResponse {
  movies: Movie[]
}

export async function getMovies() {
  const response = await api.get('/movies')
  const data: GetMoviesResponse = response.data

  return data
}
