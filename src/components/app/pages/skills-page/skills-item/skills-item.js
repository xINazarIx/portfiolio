import React from 'react';
import { motion } from 'framer-motion';

import { scaleAnimations, opacityHoverAnimations } from '../../../../utils/AnimationsTemplate/AnimationsTemplate';

const SkillsItem = ({img, delay, items}) => {

  let elements = items.map((item, idx) => {
    let animationDelay = idx + idx + 1
    return (
      <motion.li key={idx} variants={opacityHoverAnimations} custom={animationDelay}>
        - {item}
      </motion.li>
    )
  })

  return (
    <motion.div initial="hidden" whileInView="visible" whileHover="hover" variants={scaleAnimations} custom={delay} className="skills-page__item">
      <div className="skills-page__item-front">
        <img className="skills-page__item-img" src={img} alt="" />
      </div>
      <div className="skills-page__item-back">
        <ul>
          {elements}
        </ul>
      </div>
    </motion.div>
  );
};

export default SkillsItem;
