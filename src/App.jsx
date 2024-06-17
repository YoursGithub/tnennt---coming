import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comingsoon from './pages/Comingsoon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Comingsoon />
    </>
  )
}

export default App
