// CSS
import styles from "./Navbar.module.css"

const Navbar = ({ lang, setLang, aboutRef, abilitiesRef, projectsRef }) => {
  const scrollTo = (componentRef, align) => {
    componentRef.current.scrollIntoView({
      behavior: "smooth",
      block: `${align}`
    })
  }

  return (
    <nav className={styles.navbar}>
      <ul>
        {lang === "br" ? (
          <>
            <li className={styles.not_img} onClick={() => scrollTo(aboutRef, 'center')}>Sobre Mim</li>
            <li className={styles.not_img} onClick={() => scrollTo(abilitiesRef, 'center')}>Habilidades</li>
            <li className={styles.not_img} onClick={() => scrollTo(projectsRef, 'start')}>Projetos</li>
          </>
        ) : (
          <>
            <li className={styles.not_img} onClick={() => scrollTo(aboutRef, 'center')}>About Me</li>
            <li className={styles.not_img} onClick={() => scrollTo(abilitiesRef, 'center')}>Abilities</li>
            <li className={styles.not_img} onClick={() => scrollTo(projectsRef, 'start')}>Projects</li>
          </>
        )}
        <li>
          <img 
            src="./others/br-flag.png" 
            alt="Bandeira do Brasil" 
            className={lang === "br" ? styles.isActive : null} 
            onClick={() => setLang("br")} 
          />
        </li>
        <li>
          <img 
            src="./others/us-flag.png" 
            alt="Bandeira do EUA" 
            className={lang === "en" ? styles.isActive : null} 
            onClick={() => setLang("en")} 
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar