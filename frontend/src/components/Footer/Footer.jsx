import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p>&copy; 2023 - Site desenvolvido por <a href="https://github.com/nicolaskleinaraujo/">Nicolas Klein</a></p>
    </footer>
  )
}

export default Footer