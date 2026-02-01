import React from "react";
import netflix_clone from "../../assets/netflix_clone.jpg";
import meditracker from "../../assets/medi_tracker.jpg";
import todo_app from "../../assets/todo_app.jpg";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Meditracker",
      image: meditracker,
      liveUrl: "https://meditrack-healthcare-8lk2.vercel.app/",
      githubUrl: "https://github.com/Shreya26-b/meditrack_healthcare",
      description:
        "Role-based healthcare app with appointments, workflows, and real-time UI updates.",
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "React Router",
        "CSS",
        "LocalStorage",
        "Vercel",
      ],
    },
    {
      title: "Netflix Clone",
      image: netflix_clone,
      liveUrl: "https://netflix-clone-app-six.vercel.app/",
      githubUrl: "https://github.com/Shreya26-b/Netflix-clone-app",
      description:
        "Netflix-inspired streaming UI with API-driven content and optimized rendering.",
      tech: ["React", "JavaScript", "CSS", "API", "Firebase"],
    },
    {
      title: "Todo App",
      image: todo_app,
      liveUrl:
        "https://696e0ccd377890047afafad9--celebrated-vacherin-83a8ca.netlify.app/",
      githubUrl: "https://github.com/Shreya26-b/Todo_App",
      description:
        "Responsive todo app with CRUD, filters, dark mode, and persistent storage.",
      tech: ["HTML", "CSS", "JavaScript", "LocalStorage", "Netlify"],
    },
  ];

  return (
    <section id="projects" className="w-full bg-[#FAF1E3] py-20 px-[5%]">
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3b2f2f]">
          Projects
        </h2>
        <p className="mt-3 text-[#6b5b5b] max-w-2xl">
          A selection of projects showcasing frontend engineering, UI design,
          and real-world problem solving.
        </p>
      </div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#fff8ee] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col"
          >
            {/* Image */}
            <div className="h-44 w-full overflow-hidden bg-[#FAF1E3]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              {/* Title */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-[#3b2f2f] hover:underline flex items-center gap-2"
              >
                {project.title}
                <FaExternalLinkAlt className="text-sm" />
              </a>

              {/* Description */}
              <p className="text-sm text-[#6b5b5b] mt-3">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-[#FAF1E3] text-[#3b2f2f]"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-auto pt-5 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#3b2f2f] hover:opacity-80"
                >
                  <FaGithub className="text-xl" />
                  <span className="text-sm">Source Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
