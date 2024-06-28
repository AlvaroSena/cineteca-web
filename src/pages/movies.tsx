import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { MovieCard } from '../components/MovieCard'
import { Movie } from '../types/Movie'
import { getMovies } from '../lib/get-movies'
import { LoadingMovieCard } from '../components/LoadingMovieCard'

export function Movies() {
  const [isFetching, setIsFetching] = useState(true)
  const [isFetchingAgain, setIsFetchingAgain] = useState(false)
  const [movies, setMovies] = useState<Movie[] | null>([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    getMovies(offset).then((data) => {
      setTimeout(() => {
        setMovies([...(movies as []), ...data.movies])
        setIsFetching(false)
        setIsFetchingAgain(false)
      }, 2000)
    })
  }, [offset])

  function onScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setOffset((offset) => offset + 15)
      setIsFetchingAgain(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="">
      <Header />
      <div className="max-w-[1120px] mx-4 lg:mx-auto my-8">
        <h1 className="my-6 font-semibold text-white text-2xl">
          Todos os filmes
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
              {isFetchingAgain &&
                [...Array(15)].map((card) => {
                  return <LoadingMovieCard key={card} />
                })}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
