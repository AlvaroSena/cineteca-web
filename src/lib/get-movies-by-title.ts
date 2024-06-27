import { Movie } from '../types/Movie'
import { api } from './api'

interface GetMoviesByTitleResponse {
  movies: Movie[]
}

export async function getMoviesByTitle(title: string) {
  const response = await api.get(`/movies/query/title?q=${title}`)
  const data: GetMoviesByTitleResponse = response.data

  return data
}
