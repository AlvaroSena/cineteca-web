import movieImg from '../assets/movie.png'

import { useState } from 'react'
import { CalendarIcon } from './Icons/CalendarIcon'
import { ClockIcon } from './Icons/ClockIcon'
import { PlayerIcon } from './Icons/PlayerIcon'
import { MovieDialog } from './MovieDialog'

export function MovieCard() {
  const [open, setOpen] = useState(false)

  return (
    <div className="max-w-[194px] w-full flex flex-col gap-3">
      <img src={movieImg} alt="" />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-between gap-2">
          <ClockIcon />
          <span className="text-slate-500 text-sm">3:00:00</span>
        </div>

        <div className="flex flex-row items-center justify-between gap-2">
          <CalendarIcon />
          <span className="text-slate-500 text-sm">2023</span>
        </div>
      </div>

      <button
        className="bg-slate-900 hover:bg-slate-800 transition flex flex-row items-center justify-center h-11 rounded gap-2"
        onClick={() => setOpen(true)}
      >
        <PlayerIcon /> Assistir filme
      </button>

      <MovieDialog isOpen={open} onClose={() => setOpen(false)} />
    </div>
  )
}
