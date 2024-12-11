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
          <img src="https://i.pinimg.com/736x/e8/7a/b0/e87ab0a15b2b65662020e614f7e05ef1.jpg" alt="" className="w-[300px] cursor-pointer rounded-full shadow-1 shadow-indigo-900 transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]" />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center ">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-5xl font-light md:text-7xl">Imals Fao</h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-2xl font-light md:text-3xl">FullStack Web Developer</h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            Hi, I'm Imals Fao, a full-stack web programmer specializing in modern, interactive applications.
            I build responsive front-ends with React.js and scalable back-ends with Node.js and MongoDB/PostgreSQL, delivering seamless, user-focused solutions.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero