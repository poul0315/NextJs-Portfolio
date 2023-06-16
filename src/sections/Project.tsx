import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Project() {
    const projectsData = [
        {
          image: "/projects/project1.png",
          projectName: "Caption2Emoji",
          projectLink: "https://netlify.com",
          projectDescription:
            "This is a web application that uses the PokeAPI to display information about different Pokemon, including their evolution levels and details. You can compare multiple Pokemon using a queue, and add them to your personal list using Firebase's Firestore database.",
          projectTech: [
            "Next",
            "React",
            "OpenAI-API",
            "Tailwind CSS",
            "Typescript",
          ],
          projectExternalLinks: {
            github: "",
            externalLink: "https://caption2emoji.vercel.app/",
          },
        },
        {
          image: "/projects/project2.png",
          projectName: "UW BlockChain Blog",
          projectLink: "https://netlify.com",
          projectDescription:
            "This is a chat app made with React and Node.js that sends real-time messages and is highly scalable. It uses advanced JavaScript concepts like debouncing and is optimized for React. It has 300+ stars on GitHub and over 180k views on YouTube.",
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
            "I made a Netflix copy with TMBD Api. It has infinite scrolling and lets you watch movies by genre. You can also add movies to your favorites list.",
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
              <motion.div
                className="project"
                key={projectName}
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
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
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
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
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
            );
          }
        )}
      </div>
    </div>
    );
}

export default Project;