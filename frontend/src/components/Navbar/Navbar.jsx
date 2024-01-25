// CSS
import styles from "./Navbar.module.css"

const Navbar = ({ lang, setLang }) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        {lang === "br" ? (
          <>
            <li className={styles.not_img}>Sobre Mim</li>
            <li className={styles.not_img}>Habilidades</li>
            <li className={styles.not_img}>Projetos</li>
          </>
        ) : (
          <>
            <li className={styles.not_img}>About Me</li>
            <li className={styles.not_img}>Abilities</li>
            <li className={styles.not_img}>Projects</li>
          </>
        )}
        <li><img src="./others/br-flag.png" alt="Bandeira do Brasil" onClick={() => setLang("br")} /></li>
        <li><img src="./others/us-flag.png" alt="Bandeira do Brasil" onClick={() => setLang("en")} /></li>
      </ul>
    </nav>
  )
}

export default Navbar