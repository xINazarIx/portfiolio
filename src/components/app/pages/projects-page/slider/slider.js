import React, { useState, useEffect } from 'react';

import {motion} from 'framer-motion';
import { opacityAnimations } from '../../../../utils/AnimationsTemplate/AnimationsTemplate';

import Slider from 'react-slick';

import './slider.scss';

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

const SliderComponent = () => {
  const [tab, setTab] = useState('default');

  useEffect(() => {}, [tab]);

  const showSlider = () => {
    const settings = {
      className: 'center',
      infinite: false,
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      slidesToScroll: 1,
      slidesPerRow: 1,
    };

    const renderElements = (arr) => {
      return arr.map((item, i) => {
        return (
          <div key={i}>
            <div className="slider-item">Project {item}</div>
          </div>
        );
      });
    };

    switch (tab) {
      case 'default': {
        return <DefaultSlider settings={settings} elements={renderElements(arr1)} />;
      }
      case 'react': {
        return <ReactSlider settings={settings} elements={renderElements(arr2)} />;
      }
      default: {
        return null;
      }
    }
  };

  const onChangeSlider = (e) => {
    let tab = e.currentTarget.getAttribute('data-tab');
    setTab(tab);
  };

  return (
    <div>
      {showSlider()}

      <button data-tab="default" onClick={onChangeSlider}>
        tab1
      </button>
      <button data-tab="react" onClick={onChangeSlider}>
        tab2
      </button>
    </div>
  );
};

const DefaultSlider = ({elements, settings}) => {
  return (
    <Slider {...settings}>
      {elements}
    </Slider>
  );
};

const ReactSlider = ({elements, settings}) => {
  return (
    <Slider {...settings}>
      {elements}
    </Slider>
  );
};

export default SliderComponent;
