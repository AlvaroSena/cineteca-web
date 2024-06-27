import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { MovieCard } from '../components/MovieCard'
import { Movie } from '../types/Movie'
import { getMovies } from '../lib/get-movies'
import { LoadingMovieCard } from '../components/LoadingMovieCard'

export function Movies() {
  const [isFetching, setIsFetching] = useState(true)
  const [movies, setMovies] = useState<Movie[] | null>([])

  useEffect(() => {
    getMovies().then((data) => {
      setMovies(data.movies)
      setIsFetching(false)
    })
  }, [])

  return (
    <div className="">
      <Header />
      <div className="max-w-[1120px] mx-4 lg:mx-auto">
        <h1 className="my-6 font-semibold text-white text-2xl">
          Acessados recentemente
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {isFetching ? (
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => {
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
