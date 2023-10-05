import React from 'react';
import { motion } from 'framer-motion';



export default function About() {
  const variants = {
    visible: { opacity: 1, y: -50 },
    hidden: { opacity: 0, y: 0 },
  };
  
  interface SkillProps {
    name: string;
    percentage: number;
    animationName: string;
  };

  const skillsData = [
    {
      category: "Programming Language",
      details: [
        { name: "Python", percentage: 75 }, // Example percentage, adjust accordingly
        { name: "JavaScript", percentage: 70 },
        { name: "C/C++", percentage: 65 },
        { name: "Java", percentage: 70 },
      ],
    },
    {
      category: "Framework/Libraries",
      details: [
        { name: "ReactJs", percentage: 85 },
        { name: "NextJs", percentage: 65 },
        { name: "Flask", percentage: 75 },
        { name: "Tailwind", percentage: 90 }, // Example percentage, adjust accordingly
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
          <div className="skillDiv">
              <span className="skillBar" style={{ width: `${percentage}%` }}></span>
          </div>
      </div>
  );

  return (
    <div className="skill-div flex flex-col">
      <motion.div
          className="skill-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
          }}
      >
          <h2>Skills</h2>
      </motion.div>
      <motion.div
        className="skill-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        variants={variants}
      >
          {skillsData.map((skillSection) => (
            <div key={skillSection.category} className={`skill-item skill-${skillSection.category.toLowerCase().replace(/\s+/g, '-')}`}>
              <h3 className="skill-section">{skillSection.category}</h3>
              <div>
                {skillSection.details.map((skill) => (
                  <Skill
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    animationName={`${skill.name.toLowerCase().replace(/\s+/g, '')}Bar`}
                  />
                ))}
              </div>
            </div>
          ))}
      </motion.div>
    </div>
  );
}