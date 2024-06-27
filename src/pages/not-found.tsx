export function NotFound() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="font-bold text-white text-4xl">
        Ops! Página não econtrada
      </h1>
      <p className="text-slate-400 my-3">
        Verifique se o endereço está correto.
      </p>
    </div>
  )
}
