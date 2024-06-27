import { Header } from '../components/Header'
import { MovieForm } from '../components/MovieForm'

export function Studio() {
  return (
    <div>
      <Header />
      <div className="max-w-[1120px] mx-4 lg:mx-auto">
        <h1 className="my-6 font-semibold text-white text-2xl">
          Cadastrar filme
        </h1>
        <div className="flex flex-row min-h-screen justify-center items-center max-w-[560px] mx-auto">
          <MovieForm />
        </div>
      </div>
    </div>
  )
}
