import logo from '../assets/logo.png'

// import { useSearchParams } from 'react-router-dom'
// import { SearchIcon } from './Icons/SearchIcon'
// import { Input } from '@headlessui/react'

export function Header() {
  // const [, setSearchParams] = useSearchParams()

  // function onFocusOut(event: any) {
  //   setSearchParams((state) => {
  //     state.delete('genre')
  //     state.set('title', event.target.value)
  //     return state
  //   })
  // }

  return (
    <header className="h-20">
      <div className="max-w-[1120px] mx-4 lg:mx-auto h-20 flex flex-row items-center justify-between">
        <a href="/">
          <img className="max-w-40 w-full" src={logo} alt="" />
        </a>
        {/* <div className="border border-slate-800 data-[hover]:shadow flex flex-row items-center bg-slate-900 p-2 rounded-lg">
          <div className="mx-3">
            <SearchIcon />
          </div>
          <Input
            type="text"
            placeholder="Pesquisar por título"
            className="bg-slate-900 placeholder-slate-500 outline-none"
            onBlur={onFocusOut}
          />
        </div> */}
      </div>
    </header>
  )
}
