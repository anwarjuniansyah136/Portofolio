import { motion } from "framer-motion";

// Define the type for project data
interface ProjectData {
  image: string;
  title: string;
  description: string;
  technologies: string[];
}

interface ScrollRevealProps {
  children: React.ReactNode;
}

const Project: React.FC = () => {
  const projectData: ProjectData[] = [
    {
      image: "https://i.pinimg.com/736x/c2/63/c1/c263c1c33a98e82e8b4fa635d6e2c40a.jpg",
      title: "Sepokat Store",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequuntur impedit ad perferendis sunt omnis sint quaerat ratione, architecto debitis asperiores.",
      technologies: ["HTML", "CSS", "Javascript"],
    },
    {
      image: "https://i.pinimg.com/736x/bc/e1/b7/bce1b79083c69cb8e41c9df541ae9ccd.jpg",
      title: "Personal Portfolio",
      description:
        "A modern and elegant portfolio website built using React.js, showcasing personal projects, skills, and experiences with interactive animations and a dark theme.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      image: "https://i.pinimg.com/736x/a6/73/46/a673469e0027ee76595d29c53af94a45.jpg",
      title: "Attendance System",
      description:
        "A face detection-based attendance system that ensures secure and automated attendance tracking for organizations.",
      technologies: ["Kotlin", "Spring Boot", "Machine Learning"],
    },
    {
      image: "https://i.pinimg.com/736x/47/de/3f/47de3f5ff63739d904b2721995a50ebe.jpg",
      title: "ReelVerse",
      description:
        "A comprehensive movie website where users can browse, search, and watch trailers or films, complete with advanced filtering options and an interactive UI.",
      technologies: ["React", "Tailwind CSS", "Node JS"],
    },
  ];

  const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
  };

  const ProjectCard: React.FC<{ project: ProjectData }> = ({ project }) => {
    return (
      <ScrollReveal>
        <div
          className="project-card flex flex-col items-center gap-8 p-4 md:flex-row md:gap-24"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
          />

          <div className="flex flex-col gap-5">

            <div className="flex flex-col gap-3">
              <div className="text-xl font-semibold">{project.title}</div>
              <p className="mt-2 text-sm text-gray-400">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-5">
              {project.technologies.map((tech, index) => (
                <span key={index} className="rounded-lg bg-black p-3">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </ScrollReveal>
    );
  };

  return (
    <div
      id="project"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;