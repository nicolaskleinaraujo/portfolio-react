// CSS
import styles from "./About.module.css"

// Modules
import { forwardRef } from "react"

const About = forwardRef(({ lang }, ref) => {
  return (
    <div ref={ref}>
        {lang === "br" ? (
            <>
                <h2>Sobre Mim</h2>
            </>
        ) : (
            <>
                <h2>About Me</h2>
            </>
        )}
        

        <div className={styles.container}>
            <div className={styles.socials}>
                <img src="./others/my-photo.jpg" alt="Minha foto" />
                <ul>
                    <li><a href="https://github.com/nicolaskleinaraujo/" target="blank">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/nicolaskleinaraujo/" target="blank">Linkedin</a></li>
                    <li><a href="https://wa.me/5544997666224" target="blank">Whatsapp</a></li>
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
                        </>
                    ) : (
                        <>
                            <li>My name is <strong>Nicolas Klein</strong> and I am 17 years old.</li>
                            <li>I was born and <strong>live in Brazil</strong>.</li>
                            <li>I have <strong>proficiency in english</strong>.</li>
                            <li>I'm <strong>studying Systems Analysis and Development</strong>.</li>
                            <li>The main language I use is <strong>JavaScript</strong>.</li>
                            <li>I study <strong>web development</strong>, I use technologies such as: <strong>Node.js and React</strong>.</li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    </div>
  )
})

export default About