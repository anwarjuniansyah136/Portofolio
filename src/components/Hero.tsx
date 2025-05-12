import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="flex px-16 min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="anwar.jpeg" 
            alt="Anwar Juniansyah" 
            className="w-[300px] cursor-pointer rounded-full shadow-1 shadow-indigo-900 transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px] bg" 
            />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center ">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-5xl font-light md:text-7xl">Anwar Juniansyah</h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-2xl font-light md:text-3xl">FullStack Web Developer | BackEnd Developer | FrontEnd Web Developer | FullStack Android Developer | FullStack IOS Developer | FrontEnd Android Developer | FrontEnd IOS Developer</h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
          Hi, I'm Anwar Juniansyah — a Full-Stack Web and Android Developer who focuses on developing modern, responsive, and interactive applications.

I have built various applications and websites with Front-End using React.js, Vue.js, Kotlin, Flutter, and HTML as well as scalable Back-End using Node.js, Express.js, Java (Spring Boot), with database support such as MongoDB, MySQL, and PostgreSQL.

I prioritize performance, clean code structure, and smooth user experience. I develop every project with a holistic approach — from the interface to the logic behind the scenes — to present functional and efficient digital solutions.          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero