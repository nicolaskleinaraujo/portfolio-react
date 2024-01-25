// CSS
import './App.css'

// Language Context
import { useContext } from 'react'
import { LangContext } from "./context/LangContext"

// Components
import Navbar from "./components/Navbar/Navbar"
import Header from './components/Header/Header'
import About from './components/About/About'
import Abilities from './components/Abilities/Abilities'
import Footer from './components/Footer/Footer'

function App() {
  const {lang, setLang} = useContext(LangContext)

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Header />
      <About lang={lang} />
      <Abilities lang={lang} />
      <Footer lang={lang} />
    </>
  )
}

export default App
