export default function ProjectCard({ title, description, tech, repo, demo }){
    return(
        <article className="border rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
            <div className="mt-3 flex gap-2 flex-wrap">
                {tech.map(t => <span key={t} className="text-xs px-2 py-1 border rounded">{t}</span>)}
            </div>
            <div className="mt-4 flex gap-2">
                <a href={repo} target="_blank" rel="noreferrer" className="text-sm border px-3 py-1 rounded">Repo</a>
                {demo && <a href={demo} target="_blank" rel="noreferrer" className="text-sm border px-3 py-1 rounded">Demo</a>}
            </div>
        </article>
    )
}