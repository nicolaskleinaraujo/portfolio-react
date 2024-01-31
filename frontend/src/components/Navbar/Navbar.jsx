// CSS
import styles from "./Navbar.module.css"

const Navbar = ({ lang, setLang, aboutRef, abilitiesRef, projectsRef }) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        {lang === "br" ? (
          <>
            <li 
              className={styles.not_img} 
              onClick={() => aboutRef.current?.scrollIntoView({behavior: "smooth"})}>Sobre Mim</li>
            <li 
              className={styles.not_img} >Habilidades</li>
            <li className={styles.not_img}>Projetos</li>
          </>
        ) : (
          <>
            <li className={styles.not_img}>About Me</li>
            <li className={styles.not_img}>Abilities</li>
            <li className={styles.not_img}>Projects</li>
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