import { useState } from 'react'
import classes from './App.module.css'
import AppHeader from './components/AppHeader'
import ConsultAdv from './components/ConsultAdv'
import clsx from "clsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={classes.appHeader}>
        <AppHeader />
      </div>
      <ConsultAdv />
    </>
  )
}

export default App
