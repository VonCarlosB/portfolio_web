import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer(){
    return(
        <footer className="bg-white shadow-inner mt-12">
            <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Información / copyright */}
                <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Carlos. Todos los derechos reservados.
                </p>

                {/* Redes */}
                <div className="flex gap-4">
                <a
                    href="https://github.com/VonCarlosB"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition"
                    aria-label="GitHub"
                >
                    <FaGithub size={20} />
                </a>
                <a
                    href="https://linkedin.com/in/carlos-borrell-fortis"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin size={20} />
                </a>
                </div>
            </div>
        </footer>
    )
}