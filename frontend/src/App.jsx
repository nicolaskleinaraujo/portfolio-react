// Modules
import { useRef } from 'react'

// Components
import Navbar from "./components/Navbar/Navbar"
import Header from './components/Header/Header'
import About from './components/About/About'
import Abilities from './components/Abilities/Abilities'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {
  // The refs are used on the navbar component to scroll
  const aboutRef = useRef(null)
  const abilitiesRef = useRef(null)
  const projectsRef = useRef(null)

  return (
    <>
      <Navbar aboutRef={aboutRef} abilitiesRef={abilitiesRef} projectsRef={projectsRef} />
      <Header />
      <About ref={aboutRef} />
      <Abilities ref={abilitiesRef} />
      <Projects ref={projectsRef} />
      <Footer />
    </>
  )
}

export default App
