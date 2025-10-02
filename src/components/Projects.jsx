import { useState } from "react"
import ProjectCard from "./ProjectCard"

export default function Projects(){
    const [projects] = useState([{
        title: 'Expositor Web FrontEnd',
        description: `Parte front-end de una web expositor que permite a usuarios registrados poner productos a modo de muestrario.`,
        tech: ['ReactJS', 'JSCookie'],
        repo: 'https://github.com/VonCarlosB/Final_project_front',
        demo: 'https://expositorweb.netlify.app/'
    }, {
        title: 'Expositor Web BackEnd',
        description: `Parte back-end de una web expositor que permite a usuarios registrados poner productos a modo de muestrario.`,
        tech: ['NodeJS', 'Express', 'MongoDB', 'Cloudinary'],
        repo: 'https://github.com/VonCarlosB/Final_project_back',
        demo: 'https://expositorweb.netlify.app/'
    }, {
        title: 'Tarifador Galeo-Leroy Merlin',
        description: `Proyecto bajo demanda de un tarifador de confección para los vendedores de Leroy Merlin que necesitan hacer presupuestos de confección para los clientes de forma eficiente.`,
        tech: ['HTML', 'CSS', 'JavaScript'],
        repo: 'https://github.com/VonCarlosB/Tarifador_Confeccion_Galeo_LeroyMerlin',
        demo: 'https://tarifadorgaleoleroy.netlify.app/'
    }, {
        title: 'Portfolio Web',
        description: 'Un portfolio web personal que muestra mi CV y proyectos destacados con enlaces a los repositorios de GitHub y a su despliegue, hecho con React y estilizado con Tailwind CSS.',
        tech: ['ReactJS', 'Vite', 'TailwindCSS'],
        repo: 'https://github.com/VonCarlosB/portfolio_web',
        demo: 'https://carlosborrellfortis.netlify.app/'
    }])

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