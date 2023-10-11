import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ExperienceDetail from "../pages/experiences/[slug]";

export const experiences = [
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
        name: "Qualitel",
        role: "Electrical Test Engineer",
        url: "https://qualitel.com/",
        positionDescription: [
            "Spearheaded and directed troubleshooting initiatives on a pivotal production line, a decisive effort that directly contributed to the realization and protection of over $2M+ in vital revenue for the organization.",
            "Collaborated on building test fixture for medical device utilizing Labview by referencing Python3 scripts.",
            "Documented comprehensive test procedures for our test fixtures, further extending support to over three assembly lines, ensuring that projects consistently met timelines and quality benchmarks.",
            "Demonstrated proficiency and expertise in a range of six key areas: deep understanding of Python3, exemplary client communication strategies, adeptness in PCB troubleshooting, mastery in automation test fixtures, and more.",
        ],
        link: "job-one"
    },
    {
        name: "UW",
        role: "Undergraduate Researcher",
        url: "https://www.washington.edu/",
        positionDescription: [
            "Contributed to research that culminated in an IEEE publication, emphasizing the application of homomorphic encryption for IoT image processing.",
            "Developed an IoT application employing homomorphic encryption to secure 512x512 pixel data. Utilized C++, OpenCV, and Microsoft SEAL, achieving optimal PSNR and performance benchmarks.",
            "Implemented New Comparison Method from Seoul National University, transforming pixel values to -1 to 1, optimizing multi-level thresholding in Microsoft SEAL's homomorphic encryption.",
            "Utilized 5 main tools: C++, OpenCV, SEAL, Unix environment, and Verilog to automate test execution.",
        ],
        link: "job-three"
    },
    {
        name: "Layrd",
        role: "Co-Founder & Full-stack Developer",
        url: "https://www.layrd.xyz/",
        positionDescription: [
            "It's coming soon!",
        ],
        link: "job-three"
    },
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
                <ul className={`exp-slider ${isSlidingOut ? 'slide-out' : ''}`}>
                    <div className="underline" style={{ backgroundColor : isSlidingOut ? "transparent" : "#9d00ff"}}></div>
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
                <button className="slider-button" onClick={handleButtonClick}>
                    {isSlidingOut ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="slider-button-icon bi bi-arrow-right-circle-fill" viewBox="0 0 16 16"> 
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/> 
                        </svg> 
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="slider-button-icon bi bi-arrow-left-circle-fill" viewBox="0 0 16 16"> 
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/> 
                        </svg>
                    }
                
                </button>
                <div className="exp-details">
                    <div className="exp-details-position">
                        <h3>
                            <span>{experiences[selected].role}</span>
                            <span className="exp-details-position-company">
                                &nbsp;@&nbsp;
                                <Link className="link exp-details-position-company" href={experiences[selected].url} target="_blank" >
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
                                <Link href={`/experiences/${experiences[selected].link}`} target="_blank">
                                    <p >Click here for more details</p>
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