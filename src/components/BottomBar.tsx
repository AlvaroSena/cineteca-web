import { SearchIcon } from './Icons/SearchIcon'

export function BottomBar() {
  return (
    <div className="fixed w-full h-20 bg-slate-900 bottom-0">
      <div className="flex items-center justify-center">
        <a href="" className="block p-5 my-3">
          <SearchIcon />
        </a>
      </div>
    </div>
  )
}
