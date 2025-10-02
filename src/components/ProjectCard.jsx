export default function ProjectCard({ title, description, tech, repo, demo }){
    return(
        <article className="border rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
            <div className="mt-3 flex flex-wrap justify-center gap-4">
                {tech.map(t => <p key={t} className="text-xs">{t}</p>)}
            </div>
            <div className="mt-4 flex flex-row justify-center gap-2">
                <a href={repo} target="_blank" className="text-sm px-3 py-1 border rounded hover:bg-blue-600">Repo</a>
                {demo && <a href={demo} target="_blank" className="text-sm px-3 py-1 border rounded hover:bg-blue-600">Demo</a>}
            </div>
        </article>
    )
}