// CSS
import styles from "./Projects.module.css"

// Modules
import { useEffect, useState } from "react"
import { forwardRef } from "react"

// Projects Data
import brData from "../../../data/projetos.json"
import enData from "../../../data/projects.json"

const Projects = forwardRef(({ lang }) => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    if (lang === "br") {
      setProjects(brData)
    } else if (lang === "en") {
      setProjects(enData)
    }
  }, [lang])

  return (
    <div>
      {lang === "br" ? (
        <>
          <h2>Projetos</h2>
        </>
      ) : (
        <>
          <h2>Projects</h2>
        </>
      )}

      {projects.length > 0 && projects.map((project) => (
        <div key={project.id} className={styles.container}>
          <div className={styles.text}>
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            {project.link1 &&
              <button><a href={project.link1} target="blank">{project.btn1}</a></button>
            }
            <button><a href={project.link2} target="blank">{project.btn2}</a></button>
          </div>

          <div>
            <img src={project.img} className={styles.img} />
          </div>
        </div>
      ))}
    </div>
  )
})

export default Projects