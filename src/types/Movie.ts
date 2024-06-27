import { Director } from './Director'
import { Player } from './Player'

export interface Movie {
  id: string
  title: string
  cover?: string
  slug: string
  dateRelease: string
  directorId: string
  genre: string
  players: Player[]
  Director: Director
}
