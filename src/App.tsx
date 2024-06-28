import { Toaster } from 'sonner'
import { AppRouter } from './AppRouter'
// import { BottomBar } from './components/BottomBar'

export function App() {
  return (
    <>
      <AppRouter />
      {/* <BottomBar /> */}
      <Toaster richColors />
    </>
  )
}
