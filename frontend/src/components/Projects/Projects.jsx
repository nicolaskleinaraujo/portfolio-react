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
        <Fragment key={project.id}>
          <div className={styles.text}>
            <h3>{project.nome}</h3>
            <p>{project.desc}</p>
            <button><a href={project.site}>Ver site</a></button>
            <button><a href={project.codigo}>Ver codigo</a></button>
          </div>
          
          <div className={styles.img}>
            <img src={project.img} />
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default Projects