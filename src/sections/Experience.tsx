import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ExperienceDetail from "../pages/experiences/[slug]";

export const experiences = [
    {
        name: "Qualitel",
        role: "Electrical Test Engineer",
        url: "https://qualitel.com/",
        positionDescription: [
            "Collaborated with a senior engineer to develop a LabView test fixture program, referring to Python3 code.",
            "Designed test framework components, such as the user interface, process models, and step types.",
            "Created test sequences within the established framework.",
            "Troubleshot and resolved issues encountered during the execution of tests in a production environment."
        ],
        link: "job-one"
    },
    {
        name: "Paccar",
        role: "Electrical Design Engineer",
        url: "https://paccar.com/",
        positionDescription: [
            "Conducted comprehensive reviews and seamlessly integrated systems for a range of heavy-duty trucks, ensuring optimal performance and functionality.",
            "Utilized technical expertise to design bespoke electrical harness systems tailored to precise customer requirements, demonstrating a meticulous attention to detail.",
            "Played a key role in supporting the design and integration of production line systems, facilitating streamlined and efficient manufacturing processes.",
            "Successfully managed engine and safety systems engineering projects, overseeing their seamless transition into the production line and contributing to their successful implementation.",
        ],
        link: "job-two"
    },
    {
        name: "UW",
        role: "Undergraduate Researcher",
        url: "https://www.washington.edu/",
        positionDescription: [
            "Developed an IoT application that applies homomorphic encryption to multi-level image thresholding using C++, OpenCV, Microsoft Simple Encrypted Arithmetic Library (SEAL) in UNIX environment",
            "Proposed a small circuit depth multi-level thresholding algorithm in the homomorphic encryption domain.",
            "Leverage knowledge in C++, OpenCV, SEAL, Unix environment, and Verilog to automate test execution.",
        ],
        link: "job-three"
    }
];

function Experience() {
    const [selected, setSelected] = useState(0);

    const [isSlidingOut, setIsSlidingOut] = useState(false);

    const handleButtonClick = () => {
        setIsSlidingOut(prevState => !prevState); // toggle the state
    }

    useEffect(() => {
        const transformSelected = () => {
            const underline = document.querySelector<HTMLElement>(".underline");
            underline!.style.top = `${selected * 2.5}rem`;
        };
        transformSelected()
    }, [selected])

    return (
        <div className="experience" id="experience">
            <motion.div
                className="title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
                }}
            >
                <h2>Work Experience</h2>
            </motion.div>
            <motion.div
                className="container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
                }}
            >
                {/* <ul className="exp-slider">
                    <div>button</div>
                    <div className="underline"></div>
                    {experiences.map((experience, index) => {
                        return (
                          <li key={index} className={
                            `exp-slider-item ${index === selected && "exp-slider-item-selected"}`
                            }
                            onClick={() => setSelected(index)}
                            >  
                            <span>{experience.name}</span>
                          </li>
                        );
                    })}
                </ul> */}
                <button onClick={handleButtonClick}>{">"}</button>
                <ul className={`exp-slider ${isSlidingOut ? 'slide-out' : ''}`}>
                    <div className="underline"></div>
                    {experiences.map((experience, index) => {
                        return (
                            <li key={index} className={`exp-slider-item ${index === selected && "exp-slider-item-selected"}`}
                                onClick={() => setSelected(index)}
                            >
                                <span>{experience.name}</span>
                            </li>
                        );
                    })}
                </ul>
                <div className="exp-details">
                    <div className="exp-details-position">
                        <h3>
                            <span>{experiences[selected].role}</span>
                            <span className="exp-details-position-company">
                                &nbsp;@&nbsp;
                                <Link className="link exp-details-position-company" href={experiences[selected].url}>
                                    {experiences[selected].name}{""}
                                </Link>
                            </span>
                        </h3>
                        <ul className="exp-details-list">
                            {experiences[selected].positionDescription.map((description, index) => (
                                    <li key={index} className="exp-details">
                                        {description}
                                    </li>
                                )
                            )}
                            <span className="exp-details-page">
                                <Link href={`/experiences/${experiences[selected].link}`}>
                                    <p >Click Here to more details</p>
                                </Link>
                            </span>
                        </ul>
                    </div>
                </div>
            </motion.div>
            {/* Will add accordion function to hero area */}
            {/* <ExperienceDetail /> */}
        </div>
    );
}

export default Experience;