import logo from '../assets/logo.png'

// import { SearchIcon } from './Icons/SearchIcon'

export function Header() {
  return (
    <header className="h-20">
      <div className="max-w-[1120px] mx-4 lg:mx-auto h-20 flex flex-row items-center justify-between">
        <img className="max-w-40 w-full" src={logo} alt="" />
        {/* <div className="flex flex-row items-center bg-slate-900 p-2 rounded-lg">
          <div className="mx-3">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Pesquisar por título"
            className="bg-slate-900 placeholder-slate-500 outline-none"
          />
        </div> */}
      </div>
    </header>
  )
}
