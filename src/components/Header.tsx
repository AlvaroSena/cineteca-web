import logo from '../assets/logo.png'

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { genres } from '../types/genres'

export function Header() {
  return (
    <header className="h-20">
      <div className="max-w-[1120px] mx-4 lg:mx-auto h-20 flex flex-row items-center justify-between">
        <nav className="flex flex-row items-center">
          <a href="/" className="mr-6">
            <img className="max-w-40 w-full" src={logo} alt="" />
          </a>
          <Popover className="relative">
            <PopoverButton className="text-slate-100 hover:text-slate-300 transition">
              Gêneros
            </PopoverButton>
            <PopoverPanel
              anchor="bottom"
              className="grid grid-cols-4 gap-3 border border-slate-700 data-[hover]:shadow bg-slate-800 p-4 rounded-lg"
            >
              {genres.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={`/genre/${item}`}
                    className="text-slate-500 hover:text-slate-300 transition"
                  >
                    {item}
                  </a>
                )
              })}
            </PopoverPanel>
          </Popover>
        </nav>
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
