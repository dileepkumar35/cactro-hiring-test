import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ name, icon, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className='w-28 h-28 flex flex-col items-center justify-center'
  >
    <div className='w-20 h-20 rounded-full bg-tertiary flex items-center justify-center shadow-card' style={{ backgroundColor: '#151030' }}>
      <div className="text-4xl">{icon}</div>
    </div>
    <p className="text-white text-[12px] mt-2 text-center">{name}</p>
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My technical skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} {...technology} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
