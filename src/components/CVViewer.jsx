export default function CVViewer(){
    return(
        <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="flex justify-between items-center p-3 bg-white">
                <h2 className="font-semibold">Currículum Vitae</h2>
                <a href="/CV_CarlosBorrellFortis.pdf" download className="text-sm px-3 py-1 border rounded">Descargar CV</a>
            </div>
            <div className="h-[80vh]">
                <iframe src="/CV_CarlosBorrellFortis.pdf" className="w-full h-full" title="CV" />
            </div>
        </div>
    )
}