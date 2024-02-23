// CSS
import styles from "./Footer.module.css"

// Modules
import { useContext } from "react"

// Language Context
import { LangContext } from "../../context/LangContext"

const Footer = () => {
  const { lang } = useContext(LangContext)

  return (
    <footer className={styles.footer}>
        {lang === "br" ? (
          <p>&copy; 2023 - Site desenvolvido por <a href="https://github.com/nicolaskleinaraujo/" target="_blank">Nicolas Klein</a></p>
        ) : (
          <p>&copy; 2023 - Website developed by <a href="https://github.com/nicolaskleinaraujo/" target="_blank">Nicolas Klein</a></p>
        )}
    </footer>
  )
}

export default Footer