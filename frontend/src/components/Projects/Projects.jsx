// CSS
import styles from "./Projects.module.css"

// Modules
import { Fragment, useEffect, useState } from "react"

// Projects Data
import data from "../../../data/projetos.json"

const Projects = ({ lang }) => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(data)
  }, [])

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
            <h3>{project.nome}</h3>
            <p>{project.desc}</p>
            <button><a href={project.site} target="blank">Ver site</a></button>
            <button><a href={project.codigo} target="blank">Ver codigo</a></button>
          </div>

          <div>
            <img src={project.img} className={styles.img} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects