import { useState } from "react"
import ProjectCard from "./ProjectCard"

export default function Projects(){
    const [projects, setProjects] = useState([])

    return(
        <section id="projects" className="my-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Proyectos Destacados</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                <ProjectCard
                    key={idx}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    repo={project.repo}
                    demo={project.demo}
                />
                ))}
            </div>
        </section>
    )
}