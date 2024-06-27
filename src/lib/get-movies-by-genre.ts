import { Movie } from '../types/Movie'
import { api } from './api'

interface GetMoviesByGenreResponse {
  movies: Movie[]
}

export async function getMoviesByGenre(genre: string) {
  const response = await api.get(`/movies/genre?q=${genre}`)
  const data: GetMoviesByGenreResponse = response.data

  return data
}
