import React from "react";
import Image from "next/image";



function About() {
    return (
        <div className="about" id="about">
            <div className="grid-skill">
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
            </div>
        </div>
    )
}

export default About;