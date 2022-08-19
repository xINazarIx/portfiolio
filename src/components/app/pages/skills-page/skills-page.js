import React from 'react';

import { Consumer as DataConsumer } from '../../../data/data.js';
import SkillsItem from './skills-item/skills-item';


import './skills-page.scss';

const SkillsPage = () => {
  return (
    <DataConsumer>
      {
        ({skills}) => {

          let elements = skills.map(({img, skills_items}, idx) => {
            let delay = idx + idx + 1
            return <SkillsItem key={img} img={img} delay={delay} items={skills_items}/>
          })

          return (
            <div className="skills-page page">
              <div className="container">
                <div className="skills-page__items">
                  {elements}
                </div>
              </div>
            </div>
          );
        }
      }
    </DataConsumer>
  );
};

export default SkillsPage;
