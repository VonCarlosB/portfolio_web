import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CVViewer from './components/CVViewer'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar/>
      <main className="container mx-auto px-4">
        <Hero/>
        <section id="cv" className="my-12">
          <CVViewer/>
        </section>
        <section id="projects" className="my-12">
          <Projects/>
        </section>
      </main>
    </div>
    <Footer/>
    </>
  )
}

export default App
