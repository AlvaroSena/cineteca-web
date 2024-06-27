import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { MovieCard } from '../components/MovieCard'
import { Movie } from '../types/Movie'
import { getMovies } from '../lib/get-movies'
import { LoadingMovieCard } from '../components/LoadingMovieCard'
import { genres } from '../types/genres'
import { useSearchParams } from 'react-router-dom'
import { getMoviesByGenre } from '../lib/get-movies-by-genre'
import { Select } from '@headlessui/react'
// import { getMoviesByTitle } from '../lib/get-movies-by-title'

export function Movies() {
  const [isFetching, setIsFetching] = useState(true)
  const [movies, setMovies] = useState<Movie[] | null>([])
  const [filteredMovies, setFilteredMovies] = useState<Movie[] | null>([])

  const [searchParams, setSearchParams] = useSearchParams()
  const genre = searchParams.get('genre') as string
  // const title = searchParams.get('title') as string

  useEffect(() => {
    if (genre) {
      setIsFetching(true)
    }

    getMovies().then((data) => {
      setMovies(data.movies)
      setIsFetching(false)
    })
    getMoviesByGenre(genre).then((data) => {
      setFilteredMovies(data.movies)
      setIsFetching(false)
    })
    // getMoviesByTitle(title).then((data) => {
    //   setFilteredMovies(data.movies)
    //   setIsFetching(false)
    // })
  }, [genre])

  function onChangeGenre(event: any) {
    if (event.target.value === 'All') {
      setSearchParams((state) => {
        state.delete('genre')
        return state
      })
    }

    setSearchParams((state) => {
      state.set('genre', event.target.value)
      return state
    })
  }

  return (
    <div className="">
      <Header />
      <div className="max-w-[1120px] mx-4 lg:mx-auto">
        <div className="flex flex-row w-full items-center justify-between">
          <h1 className="my-6 font-semibold text-white text-2xl">
            {!genre || genre === 'All' ? 'Todos os filmes' : genre}
          </h1>
          <Select
            name="genres"
            aria-label="Gênero"
            className="border border-slate-800 data-[hover]:shadow w-48 bg-slate-900 p-2 rounded-md"
            onChange={onChangeGenre}
          >
            <option value="" disabled>
              Gênero
            </option>
            {genres.map((genre) => {
              return (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              )
            })}
          </Select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {isFetching ? (
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => {
              return <LoadingMovieCard key={card} />
            })
          ) : (
            <>
              {filteredMovies && filteredMovies?.length >= 1 ? (
                filteredMovies?.map((movie) => {
                  return (
                    <MovieCard
                      key={movie.id}
                      cover={movie.cover}
                      dateRelease={movie.dateRelease}
                      slug={movie.slug}
                      title={movie.title}
                    />
                  )
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
            </>
          )}
        </div>
      </div>
    </div>
  )
}
