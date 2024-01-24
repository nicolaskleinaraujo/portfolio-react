// CSS
import styles from "./Abilities.module.css"

const Abilities = () => {
  return (
    <div className={styles.abilities}>
        <h2>Habilidades</h2>

        <div className={styles.javascript}>
            <img src="./logos/javascript-logo.png" alt="Logo JavaScript" />
            <p>JavaScript é a principal linguagem que estudo. Utilizo ela tanto no "React" quanto integrada ao "Node.js" para aplicações back-end. Tenho conhecimento em server e banco de dados.</p>
        </div>

        <div className={styles.html_css}>
            <p>HTML e CSS são as principais linguagens que eu utilizo para estruturar e estilizar meus sites. Utilizo ferramentas como o Figma para uma pré-estruturação dos meus sites.</p>
            <img src="./logos/html-css-logo.png" alt="Logo HTML e CSS" />
        </div>

        <div className={styles.python}>
            <img src="./logos/python-logo.png" alt="Logo Python" />
            <p>Python foi a primeira linguagem de programação que eu estudei. Desenvolvo interfaces gráficas e automações de atividades. Tenho conhecimento em bibliotecas como Pandas, PyQT, PyAutoGui e Selenium.</p>
        </div>
    </div>
  )
}

export default Abilities