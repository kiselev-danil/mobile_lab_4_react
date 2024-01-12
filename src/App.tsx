import classes from './App.module.css'
import AppHeader from './components/AppHeader'
import ConsultAdv from './components/ConsultAdv'

function App() {

  return (
    <>
      <div className={classes.appHeader}>
        <AppHeader />
      </div>
      <div className={classes.consultAdv}>
        <ConsultAdv />
      </div>
    </>
  )
}

export default App
