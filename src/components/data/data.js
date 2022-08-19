import { createContext } from "react";

import htmlImg from '../../assets/images/experience/html.png';
import cssImg from '../../assets/images/experience/css.png';
import reactImg from '../../assets/images/experience/react.png';
import jsImg from '../../assets/images/experience/js.png';
import gitImg from '../../assets/images/experience/git.png';

const initialData = {
  skills: [
    {
      img: htmlImg,
      skills_items: [
        'BEM',
        'Bootstrap',
        'Check validation',
        'Accessibility',
        'Webpack',
        'Gulp',
        'Figma',
        'Photoshop'
      ]
    },
    {
      img: cssImg,
      skills_items: [
        'Scss',
        'Responsive layout',
        'Adaptive layout',
        'Pixel Perfect'
      ]
    },
    {
      img: jsImg,
      skills_items: [
        'ES6',
        'Jquery',
        'AJAX',
        'Axios',
      ]
    },
    {
      img: reactImg,
      skills_items: [
        'Classes Components',
        'Functional Components',
        'Redux',
        'React Toolkit',
        'React-Router-Dom',
        'React-Transition-Group',
        'Hooks',
        'Formik/Yup',
        'Framer-motion',
      ]
    },
    {
      img: gitImg,
      skills_items: [
        'Git',
        'GitHub',
        'Bitbucket',
        'Heroku'
      ]
    }
  ]
};

const dataContext = createContext(initialData);
const {Provider, Consumer} = dataContext;
export {Provider, Consumer};