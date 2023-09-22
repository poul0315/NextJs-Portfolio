import React from 'react';
import { motion } from 'framer-motion';

interface SkillProps {
  name: string;
  percentage: number;
  // animationName: string;
}

const skillsData = [
    {
      category: "Programming Language",
      details: [
        { name: "Python", percentage: 90 }, // Example percentage, adjust accordingly
        { name: "JavaScript", percentage: 85 },
        { name: "Typescript", percentage: 60 },
        { name: "C/C++", percentage: 80 },
        { name: "Java", percentage: 70 },
        { name: "Arduino", percentage: 70 }, // Example percentage, adjust accordingly
        { name: "HTML", percentage: 80 },
        { name: "CSS", percentage: 70 }
      ],
    },
    {
      category: "Framework/Libraries",
      details: [
        { name: "NextJs", percentage: 65 },
        { name: "ReactJs", percentage: 85 },
        { name: "FLASK", percentage: 75 },
        { name: "Tailwind", percentage: 90 }, // Example percentage, adjust accordingly
        { name: "OpenCV", percentage: 65 }, // Example percentage, adjust accordingly
        { name: "SEAL", percentage: 60 } // Example percentage, adjust accordingly
      ],
    },
    {
      category: "Tools/Software",
      details: [
        { name: "Git", percentage: 90 },
        { name: "Unix", percentage: 85 }, // Example percentage, adjust accordingly
        { name: "Linux", percentage: 80 },
      ],
    },
];

const Skill: React.FC<SkillProps> = ({ name, percentage }) => (
    <div className="skill-set">
        <div className="skill-header">
            <p className="skill-name">{name}</p>
            <p className="skill-percentage">{percentage}%</p>
        </div>
        {/* <div className="skillDiv">
            <span className="skillBar" style={{ width: `${percentage}%` }}></span>
        </div> */}
    </div>
);

const variants = {
  visible: { opacity: 1, y: -50 },
  hidden: { opacity: 0, y: 0 },
};

export default function About() {
  return (
    <div className="about" id="about">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        variants={variants}
      >
        {skillsData.map((skillSection) => (
          <div key={skillSection.category} className={`skill-item skill-${skillSection.category.toLowerCase().replace(/\s+/g, '-')}`}>
            <h3>{skillSection.category}</h3>
            <div>
              {skillSection.details.map((skill) => (
                <Skill
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  // animationName={`${skill.name.toLowerCase().replace(/\s+/g, '')}Bar`}
                />
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}