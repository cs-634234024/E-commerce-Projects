
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './contexts'
import ConnectRouter from './routers/ConnectRouter'

function App() {
  const {token} = useAuthContext()
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <ConnectRouter/>
    </>
  )
}

export default App
