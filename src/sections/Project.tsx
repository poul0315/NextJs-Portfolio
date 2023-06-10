import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Project() {
    const [selected, setSelected] = useState(0);

    const projects = [
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
        }
    ];

    return (
        <div className="project" id="project">
            <div className="title">
                <h2>Project</h2>
            </div>
            <div className="project-container">
                <ul className="exp-slider">
                    <div className="underline"></div>
                    {projects.map((project, index) => {
                        return (
                          <li key={index} className={
                            `exp-slider-item ${index === selected && "exp-slider-item-selected"}`
                            }
                            onClick={() => setSelected(index)}
                            >  
                            <span>{project.name}</span>
                          </li>
                        );
                    })}
                </ul>
                <div className="exp-details">
                    <div className="exp-details-position">
                        <h3>
                            <span>{projects[selected].role}</span>
                            <span className="exp-details-position-company">
                                &nbsp;@&nbsp;
                                <Link className="link exp-details-position-company" href={projects[selected].url}>
                                    {projects[selected].name}{""}
                                </Link>
                            </span>
                        </h3>
                        <ul className="exp-details-list">
                            {projects[selected].positionDescription.map((description, index) => (
                                    <li key={index} className="exp-details">
                                        {description}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Project;