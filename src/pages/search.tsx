/* eslint-disable react/no-unescaped-entities */
import { Input } from '@headlessui/react'
import { Header } from '../components/Header'
import { FormEvent, useEffect, useState } from 'react'
import { getMoviesByTitle } from '../lib/get-movies-by-title'
import { useSearchParams } from 'react-router-dom'
import { LoadingMovieCard } from '../components/LoadingMovieCard'
import { MovieCard } from '../components/MovieCard'
import { Movie } from '../types/Movie'

export function Search() {
  const [query, setQuery] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const [movies, setMovie] = useState<Movie[] | null>([])
  const [isFetching, setIsFetching] = useState(false)

  const queryParam = searchParams.get('q')

  useEffect(() => {
    if (queryParam) {
      setIsFetching(true)
      getMoviesByTitle(queryParam).then((data) => {
        setMovie(data.movies)
        setIsFetching(false)
      })
    }
  }, [queryParam])

  function onSubmit(event: FormEvent) {
    event.preventDefault()

    setSearchParams((state) => {
      state.set('q', query)
      return state
    })
  }

  return (
    <div>
      <Header />
      <form className="" onSubmit={onSubmit}>
        <Input
          className="w-full p-4 bg-slate-900"
          placeholder="Pesquise seu filme favorito"
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" hidden />
      </form>
      <div className="max-w-[1120px] mx-4 lg:mx-auto my-8">
        {queryParam && <h1>Resultados de "{queryParam}"</h1>}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
          {isFetching ? (
            [...Array(15)].map((card) => {
              return <LoadingMovieCard key={card} />
            })
          ) : (
            <>
              {movies?.map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    cover={movie.cover}
                    dateRelease={movie.dateRelease}
                    slug={movie.slug}
                    title={movie.title}
                  />
                )
              })}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
