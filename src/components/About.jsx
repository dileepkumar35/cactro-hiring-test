import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full xs:w-[240px] green-pink-gradient p-[1px] rounded-[20px] shadow-card'
  >
    <div
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col'
      style={{ backgroundColor: '#151030' }}
    >
      <div className="text-5xl">{icon}</div>
      <h3 className='text-white text-[18px] font-bold text-center'>
        {title}
      </h3>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        style={{ color: '#AAA6C3' }}
      >
        I'm a skilled software developer with expertise in JavaScript, Java, and Python,
        specializing in frameworks like React, Node.js, Spring Boot, and cloud technologies.
        With experience at Finteger Global Solutions and VARCONS TECHNOLOGIES, I've optimized
        workflows, reduced page load times by 30%, and improved application performance by 25%.
        I'm passionate about leveraging AI tools and creating scalable, efficient solutions that
        solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
