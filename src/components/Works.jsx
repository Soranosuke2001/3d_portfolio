import React from "react";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { live } from "../assets";
import { figma } from "../assets";

import { SectionWrapper } from "../hoc";
import { otherProjects, projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  index,
  live_Link,
  source_Code
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {live_Link ? (
              <div
                onClick={() => window.open(live_Link, "_blank")}
                className={`mr-3 w-11 h-w-11 cursor-pointer`}
              >
                <img
                  src={live}
                  alt="live icon"
                  className="w-40 h-w-40 object-contain"
                />
              </div>
            ) : null}
            <div
              onClick={() =>
                source_code_link
                  ? window.open(source_code_link, "_blank")
                  : null
              }
              className={`black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ${
                !source_code_link ? "opacity-40" : ""
              }`}
            >
              <img
                src={source_Code === 'github' ? github : figma}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px]"
        >
          The following projects showcases my skills and experiences through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and possible live demos in it. It reflects
          my ability to solve complex problems, work with different
          technologies, and manage project effectively.
        </motion.p>
      </div>

      <br />
      <motion.div variants={textVariant()}>
        <h3 className={styles.sectionSubHead}>Web Based</h3>
      </motion.div>
      <div className="mt-10 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>

      <br />
      <motion.div variants={textVariant()}>
        <h3 className={styles.sectionSubHead}>Other</h3>
      </motion.div>
      <div className="mt-10 flex flex-wrap gap-7">
        {otherProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
