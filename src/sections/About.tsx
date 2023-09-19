import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skillTitle = [
    {
        skillCategory: "Programming Language",
    },
    {
        skillCategory: "Framework/Libraries",
    },
    {
        skillCategory: "Tools/Software",
    },
    {
        skillCategory: "Language",
    }
]

function About() {
    return (
        <div className="about" id="about">
            <motion.div
                className="grid-skill"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
                }}
            >
                <div className="skill-item skill-program-lang">
                    <h3>Programming Language</h3>
                    <ul className="skill-item-details">
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>Typescript</li>
                        <li>C/C++</li>
                        <li>Java</li>
                        <li>Solidity</li>
                        <li>Arduino</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="skill-item skill-tech-tool">
                    <h3>Framework/Libraries</h3>
                    <ul className="skill-item-details">
                        <li>NextJs</li>
                        <li>ReactJs</li>
                        <li>NodeJs</li>
                        <li>ExpressJs</li>
                        <li>Bootstrap</li>
                        <li>Tailwind</li>
                        <li>ThreeJs</li>
                        <li>EJS</li>
                        <li>Openai API</li>
                        <li>Heroku</li>
                        <li>OpenCV</li>
                        <li>SEAL</li>
                    </ul>
                </div>
                <div className="skill-item skill-soft-tool">
                    <h3>Tools/Software</h3>
                    <ul className="skill-item-details">
                        <li>MongoDB</li>
                        <li>NPM</li>
                        <li>Yarn</li>
                        <li>Git</li>
                        <li>Unix</li>
                        <li>Linux</li>
                        <li>Labview</li>
                        <li>VScode</li>
                        <li>Figma</li>
                    </ul>
                </div>
                <div className="skill-item skill-lang">
                    <h3>Languages</h3>
                    <ul className="skill-item-details">
                        <li>Korean</li>
                        <li>English</li>
                        <li>Japanese</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    )
}

export default About;