import styles from "./Footer.module.css"

const Footer = ({ lang }) => {
  return (
    <footer className={styles.footer}>
        {lang === "br" ? (
          <p>&copy; 2023 - Site desenvolvido por <a href="https://github.com/nicolaskleinaraujo/" target="blank">Nicolas Klein</a></p>
        ) : (
          <p>&copy; 2023 - Website developed by <a href="https://github.com/nicolaskleinaraujo/" target="blank">Nicolas Klein</a></p>
        )}
    </footer>
  )
}

export default Footer