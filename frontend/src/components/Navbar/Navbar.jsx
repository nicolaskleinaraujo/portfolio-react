// CSS
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.not_img}>Sobre Mim</li>
        <li className={styles.not_img}>Habilidades</li>
        <li className={styles.not_img}>Projetos</li>
        <li><img src="./others/br-flag.png" alt="Bandeira do Brasil" /></li>
        <li><img src="./others/us-flag.png" alt="Bandeira do Brasil" /></li>
      </ul>
    </nav>
  )
}

export default Navbar