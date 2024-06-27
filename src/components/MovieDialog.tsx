import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { CalendarIcon } from './Icons/CalendarIcon'
import { CharIcon } from './Icons/CharIcon'
import { CloseIcon } from './Icons/CloseIcon'
import { PlayerIcon } from './Icons/PlayerIcon'
import { useEffect, useState } from 'react'
import { getMovie } from '../lib/get-movie'
import { Movie } from '../types/Movie'

interface MovieDialogProps {
  isOpen: boolean
  onClose: () => void
  slug: string
  dateRelease: Date
}

export function MovieDialog({
  isOpen,
  onClose,
  slug,
  dateRelease,
}: MovieDialogProps) {
  const [movie, setMovie] = useState<Movie>({} as Movie)

  useEffect(() => {
    getMovie(slug).then((data) => setMovie(data))
  }, [])

  return (
    <Dialog className="relative z-10" open={isOpen} onClose={onClose}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-60 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-slate-900 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-slate-900">
              <img
                className="w-full h-72 object-cover"
                src={movie.cover}
                alt=""
              />

              <button
                onClick={onClose}
                className="absolute top-4 right-4 size-7 bg-slate-950 bg-opacity-40 hover:bg-opacity-60 transition flex items-center justify-center rounded-full"
              >
                <CloseIcon />
              </button>

              <div className="p-4">
                <div className="flex flex-row items-center gap-2">
                  <h3 className="text-2xl font-semibold text-white">
                    {movie.title}
                  </h3>
                  <span className="block text-slate-500 text-sm">
                    {movie.genre}
                  </span>
                </div>

                <div className="flex flex-col gap-3 mt-3">
                  <div className="flex flex-row items-center gap-2">
                    <CharIcon />
                    <span className="block text-slate-500 text-sm">
                      {movie.director}
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CalendarIcon />
                    <span className="block text-slate-500 text-sm">
                      {dateRelease.getFullYear()}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 mt-3 gap-4">
                  {movie.players?.map((player) => {
                    return (
                      <a
                        key={player.id}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={player.videoURL}
                        className="bg-slate-950 hover:bg-opacity-40 transition flex flex-row items-center justify-center h-11 rounded gap-2"
                      >
                        <PlayerIcon /> Player 01
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
