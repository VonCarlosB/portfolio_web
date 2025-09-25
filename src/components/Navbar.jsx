import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Navbar() {
    return (
        <header className="py-4 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4">
            <a href="#home" className="text-xl font-bold">Carlos — Dev Web</a>
            <nav className="flex items-center gap-4">
            <a href="#cv" className="hover:underline">CV</a>
            <a href="#projects" className="hover:underline">Proyectos</a>
            <a href="https://github.com/VonCarlosB" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub size={20}/>
            </a>
            <a href="https://linkedin.com/in/carlos-borrell-fortis" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={20}/>
            </a>
            </nav>
        </div>
        </header>
    )
}