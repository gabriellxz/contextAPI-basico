import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import { useContext } from 'react'
import { ThemeContext } from './context/Theme'

function App() {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`app ${theme === "escuro" ? "theme-dark" : ""}`}>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
