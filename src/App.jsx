import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from "./Login/Login.jsx"
import Trial from "./Trial.jsx"
import Landing from './Landing/Landing.jsx'
import MyInformation from './MyInformation/MyInformation.jsx'
import './App.css'
import TopBar from './TopBar/TopBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing />
    </>
  )
}

export default App
