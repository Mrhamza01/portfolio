import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div id="tech" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tools
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="relative w-20 h-20 rounded-full shadow-lg overflow-hidden animate-float flex items-center justify-center "
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-3/4 h-3/4 object-contain" // Ensure the image fits properly
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
