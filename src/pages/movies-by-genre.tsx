import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { useEffect, useState } from 'react'
import { Movie } from '../types/Movie'
import { getMoviesByGenre } from '../lib/get-movies-by-genre'
import { MovieCard } from '../components/MovieCard'
import { LoadingMovieCard } from '../components/LoadingMovieCard'

export function MoviesByGenre() {
  const { genre } = useParams()
  const [movies, setMovies] = useState<Movie[] | null>([])
  const [isFetching, setIsFetching] = useState(true)
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    if (genre) {
      setPageTitle(
        genre?.charAt(0).toUpperCase() + genre?.slice(1).toLowerCase(),
      )
      getMoviesByGenre(genre).then((data) => {
        setMovies(data.movies)
        setIsFetching(false)
      })
    }
  }, [genre])

  return (
    <div>
      <Header />
      <div className="max-w-[1120px] mx-4 lg:mx-auto">
        <h1 className="my-6 font-semibold text-white text-2xl">{pageTitle}</h1>

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
            </>
          )}
        </div>
      </div>
    </div>
  )
}
