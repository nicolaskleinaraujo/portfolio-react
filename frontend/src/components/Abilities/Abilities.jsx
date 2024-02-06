// CSS
import styles from "./Abilities.module.css"

// Modules
import { useContext, forwardRef } from "react"

// Language Context
import { LangContext } from "../../context/LangContext"

const Abilities = forwardRef((props, ref) => {
  const { lang } = useContext(LangContext)

  return (
    <div className={styles.abilities} ref={ref}>
        {lang === 'br' ? (
          <>
            <h2>Habilidades</h2>
          </>
        ) : (
          <>
            <h2>Abilities</h2>
          </>
        )}

        <div className={styles.javascript}>
            <img src="./logos/javascript-logo.png" alt="Logo JavaScript" />
            {lang === "br" ? (
              <>
                <p>JavaScript é a principal linguagem que estudo. Utilizo ela tanto no "React" quanto integrada ao "Node.js" para aplicações back-end. Tenho conhecimento em server e banco de dados.</p>
              </>
            ) : (
              <>
                <p>JavaScript is the main language I study to. I use it both on "React" and integrated with "Node.js" for back-end applications. I have knowledge of servers and databases.</p>
              </>
            )}
        </div>

        <div className={styles.html_css}>
            {lang === "br" ? (
              <>
                <p>HTML e CSS são as principais linguagens que eu utilizo para estruturar e estilizar meus sites. Utilizo ferramentas como o Figma para uma pré-estruturação dos meus sites.</p>
              </>
            ) : (
              <>
                <p>HTML and CSS are the main languages I use to structure and style my websites. I use tools like Figma to pre-structure my websites.</p>
              </>
            )}
            <img src="./logos/html-logo.png" alt="Logo HTML e CSS" />
        </div>

        <div className={styles.python}>
            <img src="./logos/python-logo.png" alt="Logo Python" />
            {lang === "br" ? (
              <>
                <p>Python foi a primeira linguagem de programação que eu estudei. Desenvolvo interfaces gráficas e automações de atividades. Tenho conhecimento em bibliotecas como Pandas, PyQT, PyAutoGui e Selenium.</p>
              </>
            ) : (
              <>
                <p>Pyhton was the first progamming language I studied. I develop graphical interfaces and activity automations. I have knowledge of libraries such as Pandas, PyQT, PyAutoGui and Selenium.</p>
              </>
            )}
        </div>
    </div>
  )
})

export default Abilities