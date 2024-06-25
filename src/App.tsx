import { Header } from './components/Header'
import { MovieCard } from './components/MovieCard'

export function App() {
  return (
    <div className="">
      <Header />
      <div className="max-w-[1120px] mx-4 lg:mx-auto">
        <h1 className="my-6 font-semibold text-white text-2xl">
          Acessados recentemente
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <MovieCard />
        </div>
      </div>
    </div>
  )
}
