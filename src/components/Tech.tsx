import {
  BiLogoJavascript, BiLogoNodejs, BiLogoPostgresql, BiLogoTailwindCss
} from "react-icons/bi";
import {
  FaJava, FaPhp, FaAndroid, FaApple, FaHtml5, FaCss3, FaLaravel, FaBootstrap, FaReact
} from "react-icons/fa";
import { FaFlutter, FaDartLang } from "react-icons/fa6";
import { TbBrandKotlin, TbBrandCSharp } from "react-icons/tb";
import { IoLogoVue, IoLogoVercel } from "react-icons/io5";
import { SiSpringboot, SiMysql, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import { AiOutlineDotNet } from "react-icons/ai";

const techStack = [
  { icon: <FaJava />, color: "text-[#f89820]", name: "Java" },    
  { icon: <SiSpringboot />, color: "text-[#6db33f]", name: "Spring Boot" }, 
  { icon: <TbBrandKotlin />, color: "text-[#7f52ff]", name: "Kotlin" }, 
  { icon: <BiLogoJavascript />, color: "text-[#f0db4f]", name: "JavaScript" },
  { icon: <SiExpress />, color: "text-[#000000]", name: "Express" },
  { icon: <FaReact />, color: "text-[#61dafb]", name: "React" },
  { icon: <IoLogoVue />, color: "text-[#42b883]", name: "Vue" },
  { icon: <BiLogoTailwindCss />, color: "text-[#38bdf8]", name: "Tailwind CSS" },
  { icon: <BiLogoNodejs />, color: "text-[#68a063]", name: "Node.js" },
  { icon: <IoLogoVercel />, color: "text-[#000000]", name: "Vercel" }, 
  { icon: <FaFlutter />, color: "text-[#02569B]", name: "Flutter" },
  { icon: <FaDartLang />, color: "text-[#0175c2]", name: "Dart" },
  { icon: <FaPhp />, color: "text-[#8892be]", name: "PHP" }, 
  { icon: <FaLaravel />, color: "text-[#ff2d20]", name: "Laravel" },
  { icon: <TbBrandCSharp />, color: "text-[#7f52ff]", name: "CSharp" },
  { icon: <AiOutlineDotNet />, color: "text-[#fff]", name: "CSharp" },
  { icon: <FaHtml5 />, color: "text-[#e34c26]", name: "HTML5" }, 
  { icon: <FaCss3 />, color: "text-[#264de4]", name: "CSS3" },
  { icon: <FaBootstrap />, color: "text-[#7952b3]", name: "Bootstrap" }, 
  { icon: <SiMysql />, color: "text-[#00758f]", name: "MySQL" }, 
  { icon: <BiLogoPostgresql />, color: "text-[#336791]", name: "PostgreSQL" },
  { icon: <FaAndroid />, color: "text-[#3ddc84]", name: "Android" }, 
  { icon: <FaApple />, color: "text-[#000000]", name: "Apple" }, 
];


const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Tech = () => {
  return (
    <div
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
      id="tech"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div
              className={`cursor-pointer ${tech.color} text-[80px] transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]`}
              title={tech.name}
            >
              {tech.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
