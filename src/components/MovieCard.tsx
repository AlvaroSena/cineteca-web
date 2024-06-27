import { useState } from 'react'
import { CalendarIcon } from './Icons/CalendarIcon'
import { ClockIcon } from './Icons/ClockIcon'
import { PlayerIcon } from './Icons/PlayerIcon'
import { MovieDialog } from './MovieDialog'
import { useSearchParams } from 'react-router-dom'

interface MovieCardProps {
  cover?: string
  dateRelease: string
  slug: string
  title: string
}

export function MovieCard({ cover, dateRelease, slug, title }: MovieCardProps) {
  const [open, setOpen] = useState(false)
  const [, setSearchParams] = useSearchParams()
  const cleanedDateString = dateRelease.replace(/\.\d{3}Z$/, 'Z')

  const date = new Date(cleanedDateString)

  function onOpenMovieCard() {
    setSearchParams((state) => {
      state.set('title', slug)
      return state
    })

    setOpen(true)
  }

  function onCloseMovieCard() {
    setSearchParams((state) => {
      state.delete('title')
      return state
    })

    setOpen(false)
  }

  return (
    <div className="max-w-[194px] w-full flex flex-col gap-3">
      <img src={cover} alt={title} className="rounded-lg" />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-between gap-2">
          <ClockIcon />
          <span className="text-slate-500 text-sm">3:00:00</span>
        </div>

        <div className="flex flex-row items-center justify-between gap-2">
          <CalendarIcon />
          <span className="text-slate-500 text-sm">{date.getFullYear()}</span>
        </div>
      </div>

      <button
        className="bg-slate-900 hover:bg-slate-800 transition flex flex-row items-center justify-center h-11 rounded gap-2"
        onClick={onOpenMovieCard}
      >
        <PlayerIcon /> Assistir filme
      </button>

      <MovieDialog
        isOpen={open}
        onClose={onCloseMovieCard}
        slug={slug}
        dateRelease={date}
      />
    </div>
  )
}
