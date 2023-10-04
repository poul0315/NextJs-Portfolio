import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Project() {


    const projectsData = [
      {
        image: "/projects/project5.png",
        projectName: "MukJa (Let's eat)",
        projectLink: "https://netlify.com",
        projectDescription:
          "MukJa, meaning 'Let's eat' in Korean, is a friendly space where people share and find recipes. Designed for busy students and workers, it answers the daily question, 'What should I cook?'. More than just a recipe site, it's a community where food lovers connect and inspire. Ongoing project!",
        projectTech: [
          "React",
          "Flask",
          "AWS S3",
          "Firebase",
          "PostgreSQL",
          "Docker",
          "Tailwind CSS",
          "Framer Motion",
        ],
        projectExternalLinks: {
          github: "",
          externalLink: "https://caption2emoji.vercel.app/",
        },
      },
      {
        image: "/projects/project1.png",
        projectName: "Caption2Emoji",
        projectLink: "https://netlify.com",
        projectDescription:
          "A web application leveraging OpenAI API to instantly convert your text captions into lively emojis. With just one click, infuse your messages, social media posts, and more with a delightful touch of fun, emotion, and personal flair.",
        projectTech: [
          "Next",
          "React",
          "OpenAI-API",
          "Tailwind CSS",
          "Typescript",
        ],
        projectExternalLinks: {
          github: "https://github.com/poul0315/Emoji-GPT",
          externalLink: "https://caption2emoji.vercel.app/",
        },
      },
      {
        image: "/projects/project2.png",
        projectName: "UW BlockChain Blog",
        projectLink: "https://netlify.com",
        projectDescription:
          "Contributed to UW Blockchain Club's blog development, collaborating with team members to create components and optimize content delivery. Utilized ContentPlayer for seamless user experience. Ongoing project, continuously enhancing the platform.",
        projectTech: [
          "Next",
          "React",
          "Vercel",
          "Contentlayer",
          "Markdown",
          "Tailwind",
        ],
        projectExternalLinks: {
          github: "",
          externalLink: "",
        },
      },
      {
        image: "/projects/project3.png",
        projectName: "WeatherToday",
        projectLink: "https://netlify.com",
        projectDescription:
          "Developed my first API-driven website, WeatherToday, leveraging the OpenWeather API. Users can effortlessly obtain real-time weather information by entering the city name, zip code, or area code. This project was a milestone in my journey, introducing me to the powerful possibilities of APIs.",
        projectTech: [
          "React",
          "Node.js",
          "Express.js",
          "OpenWeather-API",
        ],
        projectExternalLinks: {
          github: "",
          externalLink: "",
        },
      },
    ];
    return (
      <div className="projects" id="work">
        <motion.div
          className="title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, y: -50 },
            hidden: { opacity: 0, y: 0 },
          }}
        >
          <h2>Projects</h2>
        </motion.div>
        <div className="projects-container">
          {projectsData.map(
            ({
              image,
              projectDescription,
              projectLink,
              projectExternalLinks,
              projectName,
              projectTech,
            }) => {
              return (
                <div key={projectName}>
                  <motion.div
                    className="project"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    variants={{
                      visible: { opacity: 1, y: -50 },
                      hidden: { opacity: 0, y: 0 },
                    }}
                  >
                    <div className="project-image">
                      <div className="project-image-overlay"></div>
                      <div className="project-image-container">
                        <Image src={image} fill alt={projectName} quality={100} className="project-image-container-image" />
                      </div>
                    </div>
                    <div className="project-info">
                      <h3 className="project-info-title">{projectName}</h3>
                      <div className="project-info-description">
                        <h3 className="project-info-description-title">{projectName}</h3>
                        <p>{projectDescription}</p>
                      </div>
                      <ul className="project-info-tech-list">
                        {projectTech.map((tech) => (
                          <li className="project-info-tech-list-item" key={tech}>
                            {tech}
                          </li>
                        ))}
                      </ul>
                      <ul className="project-info-links">
                        <li className="project-info-links-item">
                          {projectExternalLinks.github ? (
                              <Link
                                  href={projectExternalLinks.github}
                                  className="project-info-links-item-link"
                                  target="_blank" 
                                  rel="noopener noreferrer"
                              >
                                  <FiGithub />
                              </Link>
                          ) : (
                              <div 
                                  className="project-info-links-item-message"
                              >
                                  <FiGithub />
                                  <p>This is a private source.</p>
                              </div>
                          )}
                        </li>
                        <li className="project-info-links-item">
                          <Link
                            href={projectExternalLinks.externalLink}
                            className="project-info-links-item-link" 
                            target="_blank"
                          >
                            <FiExternalLink />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                  <div className="project-line"></div>
                </div>
              );
            }
          )}
        </div>
      </div>
    );
}

export default Project;