import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

import { opacityAnimations, transformAnimations } from '../../../utils/AnimationsTemplate/AnimationsTemplate';
import ConnectButtonSecondary from '../../../connect-button-secondary';

import './main-page.scss';




const MainPage = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Nazar', 'Front-end Developer'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(Math.random() * 500);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker)
    }
  }, [text]);



  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
    setText(updateText);

    if(isDeleting){
      setDelta(prevDelta => prevDelta / 2);
    }

    if(!isDeleting && updateText === fullText){
      setIsDeleting(true);
      setDelta(period)
    }else if(isDeleting && updateText === ''){
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }


  return (
    <section
        className='main-page page'
        id='home'
    >
      <div className='container'>
        <motion.div initial='hidden' whileInView='visible' className='main-page__inner'>
          <motion.div variants={opacityAnimations} custom={2} className="main-page__tagline">Welcome to my portfolio</motion.div>
          <motion.h1 variants={opacityAnimations} className='main-page__title'>{`Hi, I'm`}<span> {text}</span></motion.h1>
          <motion.p variants={opacityAnimations} custom={5} className='main-page__text'>Hi, I'm Nazar, I'm 20 years old, a little about myself, I was born in Kherson, Ukraine. At the moment I'm studying at the Kherson National Technical University, specialty - "Software Engineering". Frontend began to study in 2021, after the failed the university practice about the layout of a one-page website xD. Then I tried html and сss for the first time. And I really enjoyed doing it. Now I position myself as a strong junior specialist. <span>Hope for cooperation!</span></motion.p>
          <motion.div variants={transformAnimations} custom={7}><ConnectButtonSecondary/></motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default MainPage;