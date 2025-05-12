import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Tech from "./components/Tech"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <div className="fixed min-h-screen -z-10 w-full [background:radial-gradient(125%_125%_at_50%_10%,#0f172a_40%,#63e_100%)]"></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Tech />
        <Project />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
