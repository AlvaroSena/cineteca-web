import { Toaster } from 'sonner'
import { AppRouter } from './AppRouter'

export function App() {
  return (
    <>
      <AppRouter />
      <Toaster richColors />
    </>
  )
}
