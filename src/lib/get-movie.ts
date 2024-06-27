import { Movie } from '../types/Movie'
import { api } from './api'

export async function getMovie(slug: string) {
  const response = await api.get(`/movies/title/${slug}`)
  const data: Movie = response.data

  return data
}
