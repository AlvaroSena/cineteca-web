import { Movie } from '../types/Movie'
import { api } from './api'

interface GetMoviesResponse {
  movies: Movie[]
}

export async function getMovies(offset: number) {
  const response = await api.get(`/movies?q=${offset}`)
  const data: GetMoviesResponse = response.data

  return data
}
