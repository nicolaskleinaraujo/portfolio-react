// CSS
import styles from "./About.module.css"

const About = ({ lang }) => {
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
                {lang === "br" ? (
                    <>
                        <li>Meu nome é <strong>Nicolas Klein</strong> e tenho 17 anos.</li>
                        <li>Nasci e <strong>Moro em Mariná</strong>.</li>
                        <li>Possuo <strong>proficiencia em inglês</strong>.</li>
                        <li>Estou <strong>cursando Análise e Desenvolvimento de Sistemas</strong>.</li>
                        <li>A principal linguagem que utilizo é o <strong>JavaScript</strong>.</li>
                        <li>Estudo <strong>desenvolvimento web</strong>, utilizo tecnologias como: <strong>Node.js e React</strong>.</li>
                        <li>Meu principal hobby é jogar, adoro jogos de luta.</li>
                    </>
                ) : (
                    <>
                        <li>My name is <strong>Nicolas Klein</strong> and I am 17 years old.</li>
                        <li>I was born and <strong>live in Brazil</strong>.</li>
                        <li>I have <strong>proficiency in english</strong>.</li>
                        <li>I'm <strong>studying Systems Analysis and Development</strong>.</li>
                        <li>The main language I use is <strong>JavaScript</strong>.</li>
                        <li>I study <strong>web development</strong>, I use technologies such as: <strong>Node.js and React</strong>.</li>
                        <li>My main hobby is to gaming, my favorite genre is fighting.</li>
                    </>
                )}
                
            </ul>
        </div>
    </div>
  )
}

export default About