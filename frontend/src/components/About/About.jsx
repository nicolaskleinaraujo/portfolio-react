// CSS
import styles from "./About.module.css"

const About = () => {
  return (
    <div>
        <h2>Sobre Mim</h2>

        <div className={styles.socials}>
            <img src="./others/my-photo.jpg" alt="Minha foto" />
            <ul>
                <li><a href="#">Github</a></li>
                <li><a href="#">Linkedin</a></li>
                <li><a href="#">Whatsapp</a></li>
                <li>contatonkfa@gmail.com</li>
                <li>+55 44 99766-6224</li>
            </ul>
        </div>

        <div className={styles.text}>
            <ul>
                <li>Meu nome é <strong>Nicolas Klein</strong> e tenho 17 anos.</li>
                <li>Nasci e <strong>Moro em Mariná</strong>.</li>
                <li>Possuo <strong>proficiencia em inglês</strong>.</li>
                <li>Estou <strong>cursando Análise e Desenvolvimento de Sistemas</strong>.</li>
                <li>A principal linguagem que utilizo é o <strong>JavaScript</strong>.</li>
                <li>Estudo <strong>desenvolvimento web</strong>, utilizo tecnologias como: <strong>Node.js e React</strong>.</li>
                <li>Meu principal hobby é jogar, adoro jogos de luta.</li>
            </ul>
        </div>
    </div>
  )
}

export default About