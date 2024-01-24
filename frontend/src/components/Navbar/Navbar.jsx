// CSS
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>Sobre Mim</li>
        <li>Habilidades</li>
        <li>Projetos</li>
        <li>BRLang</li>
        <li>ENLang</li>
      </ul>
    </nav>
  )
}

export default Navbar