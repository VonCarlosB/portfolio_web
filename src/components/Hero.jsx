export default function Hero(){
    return(
        <section id="home" className="py-16 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold">Carlos — Desarrollador Web Full Stack</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Transformo ideas en aplicaciones web usables y limpias.</p>
            <div className="mt-6 flex justify-center gap-4">
                <a href="#cv" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Ver CV</a>
                <a href="/CV_CarlosBorrellFortis.pdf" download className="px-4 py-2 border rounded-lg">Descargar CV</a>
            </div>
        </section>
    )
}