import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Experience() {
    const [selected, setSelected] = useState(0);

    const experiences = [
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
                "PP Collaborated with a senior engineer to develop a LabView test fixture program, referring to Python3 code.",
                "Designed test framework components, such as the user interface, process models, and step types.",
                "Created test sequences within the established framework.",
                "Troubleshot and resolved issues encountered during the execution of tests in a production environment."
            ],
        }
    ];

    return (
        <div className="experience" id="experience">
            <div className="title">
                <h2>Work Experience</h2>
            </div>
            <div className="container">
                <ul className="exp-slider">
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
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;