export function LoadingMovieCard() {
  return (
    <div className="max-w-[194px] w-full flex flex-col gap-3">
      <div className="bg-slate-800 w-full h-[288px] rounded-lg animate-pulse"></div>
      <div className="flex flex-row items-center justify-between animate-pulse">
        <div className="flex flex-row items-center justify-between gap-2 animate-pulse">
          <span className="bg-slate-800 text-sm w-16 h-2 rounded-sm animate-pulse"></span>
        </div>

        <div className="flex flex-row items-center justify-between gap-2">
          <span className="bg-slate-800 text-sm w-8 h-2 rounded-sm animate-pulse"></span>
        </div>
      </div>

      <div className="bg-slate-800 h-11 rounded animate-pulse"></div>
    </div>
  )
}
