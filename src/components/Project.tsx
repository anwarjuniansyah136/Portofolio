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
      image: "html.png",
      title: "Otakudesu",
      description:
        "This website is a special platform for anime fans, which provides various anime titles complete with detailed information such as synopsis, genre, number of episodes, rating, and broadcast status. Users can easily search for their favorite anime through the search feature or browse by category such as genre, broadcast season, or popularity. In addition, users can also add anime to their watch list or favorites, making it easier to track anime that is being watched or that you want to watch. With an attractive interface and intuitive navigation, this website is designed to provide the best experience for anime lovers.",
      technologies: ["HTML", "CSS", "Javascript"],
    },
    {
      image: "restelectronik.jpeg",
      title: "Rest API",
      description:
        "This RESTful API is designed to support e-commerce systems that focus on selling electronic products. This API provides various endpoints that allow users to perform CRUD (Create, Read, Update, Delete) operations on product data, categories, users, and purchase transactions. The main features of this API include user authentication (login and registration), product catalog management, product search, shopping cart management, and order processing. Each request and response uses JSON format, with a consistent HTTP status code standard for clear communication between client and server. This API is built following the modular and scalable REST principles, so it can be used as a backend for mobile applications or frontend websites. Complete documentation is also provided using Swagger or Postman to facilitate integration by other developers.",
      technologies: ["Springboot", "Swagger", "MySql"],
    },
    {
      image: "vaguewalk.jpeg",
      title: "VagueWalk",
      description:
        "This Android shopping app is designed to provide a convenient, fast and efficient shopping experience right from your mobile device. Users can browse the available products by category or use the search feature to find a specific item. Each product can be viewed in detail, including images, prices and descriptions. The shopping cart feature allows users to add items of interest, manage the purchase quantity and proceed to checkout when ready to buy. The app also supports user authentication, order history and shipping status notifications. With a responsive interface and intuitive navigation, this app is the ideal solution for mobile e-shopping needs.",
      technologies: ["Kotlin", "Spring Boot", "Rest API", "MySql"],
    },
    {
      image: "tiktok.jpeg",
      title: "Tiktok",
      description:
        "This application is a short video sharing platform inspired by the concept of TikTok, where users can create, upload, and watch short videos in real-time. With an intuitive interface and an infinite vertical scroll, users can easily find relevant and entertaining content based on the recommendation algorithm. This application is equipped with essential features such as camera effects, visual filters, background music, like buttons, comments, and sharing features. Users can also follow other accounts, manage personal profiles, and view their video interaction statistics. The main focus of this application is to provide a creative space for anyone to express themselves through short videos easily and quickly right from their mobile phone.",
      technologies: ["Flutter", "Springboot", "Rest API", "MySql", "Postgree"],
    },
    {
      image: "filmiverse.jpeg",
      title: "Filmivers",
      description:
        "A comprehensive movie website where users can browse, search, and watch trailers or films, complete with advanced filtering options and an interactive UI.",
      technologies: ["React", "Express JS", "Rest API", "MySql", "Tailwind CSS"],
    },
    {
      image: "thymeleafe.jpeg",
      title: "ShopMagic",
      description:
        "This website is an e-commerce platform designed to make it easier for users to shop online. Users can search for the items they need through the search feature or browse the various products available. Each product can be easily added to a shopping cart, allowing users to collect several items before making a transaction. After selecting the desired product, users simply open the cart page to review and complete the purchase process. With an intuitive and responsive interface, this website offers a fast, practical and efficient shopping experience.",
      technologies: ["HTML", "CSS", "Bootstrap", "Springboot", "MySql"],
    },
    {
      image: "portofolio.png",
      title: "Portofolio",
      description:
      "This site aims to provide a clear overview of my skills, as well as present the projects I have worked on in a responsive and easy to navigate interface.",
      technologies: ["React", "Tailwind CSS"],
    },
    {
      image: "c.jpeg",
      title: "WARRMART",
      description:
      "This project is a market place project that is used by users and cashiers who have their own features, for cashiers including login, add items, delete items, update items and others, while for users including login, register, top up shopping and others.",
      technologies: ["C", "Notepad"],
    }
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