import { Player } from './Player'

export interface Movie {
  id: string
  title: string
  cover?: string
  slug: string
  dateRelease: string
  director: string
  genre: string
  players: Player[]
}
