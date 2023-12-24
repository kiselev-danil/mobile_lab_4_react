import { useState } from 'react'
import classes from './App.module.css'
import AppHeader from './components/AppHeader'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <AppHeader/>
      </>
  )
}

export default App
