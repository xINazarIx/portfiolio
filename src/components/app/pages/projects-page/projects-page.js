import React from "react";
import {motion} from 'framer-motion';

import {SliderComponent as Slider} from "./slider";

import './projects-page.scss';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const ProjectsPage = () => {
  return (
    <div className='projects-page page'>
      <div className="container">
        Projects
        <div className="projects-page__slider">
          <Slider />
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage