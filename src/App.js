import './App.css';
import Header from './Components/Header';
import PageIndicator from './Components/PageIndicator';
import BluePlanet from './Art/BluePlanet.svg'
import RedPlanet from './Art/RedPlanet.svg'
import BlackHole from './Art/BlackHole.svg'
import Git from './Art/Git.png'
import Email from './Art/Gmail.png'
import React, { useEffect, useState } from 'react'
import { motion, useCycle } from 'framer-motion';
import LinkCarousel from './Components/LinkCarousel';


function App() {

  const [colorValue, cycleColor] = useCycle('#FAFAFA', '#3FA0FA', '#EA57DB');
  const [animateRed, setAnimateRed] = useState(false);
  const [animatedBlack, setAnimatedBlack] = useState(false);
  const [animatedContact, setAnimatedContact] = useState(false);
  const textColorSpeed = 1500;

  useEffect(() => {
    const colorInt = setInterval(cycleColor, textColorSpeed);

    return () => clearInterval(colorInt);
  }, [])
  
  const BluePlanetVarients = {
    hidden: {rotate: 90, x: '100%'},
    show: {rotate: 0, x: 0}
  }

  const RedPlanetVarients = {
    hidden: {rotate: 90, x: '-100%'},
    show: animateRed ? {rotate: 0, x: 0}  : {rotate: 90, x: '-100%'}
  }

  const BlackHoleVarients = {
    hidden: {rotate: 90, x: '-100%'},
    show: animatedBlack ? {rotate: 0, x: 0}  : {rotate: 90, x: '100%'}
  }

  const ContactVarients = {
    hidden: { opacity: 0, y:'5rem' },
    show: animatedContact ? { opacity: 1, y: 0 } : { opacity: 0, y:'5rem' }
  }

  const uiVarients = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  return (
    <div className="App">

      <motion.div className='fixed-ui'
        variants={uiVarients}
        initial={'hidden'}
        animate={'show'}
      >
        <Header />
        <PageIndicator setAnimateRed={setAnimateRed} setAnimatedBlack={setAnimatedBlack} setAnimatedContact={setAnimatedContact}/>
      </motion.div>

      <div className='main'>
        <div id='1' className='section top'>

          <motion.p className='first-text'
            initial={{ opacity: 0, x:'-5rem' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{delay: 1}}
            viewport={{ once: true }}>

            Add some multi <motion.span animate={{color: colorValue}} transition={{duration: textColorSpeed / 1000}}>line</motion.span> splash text here.
          </motion.p>

          <motion.img className='blue-planet' src={BluePlanet} alt='blue planet'
            variants={BluePlanetVarients}
            initial={'hidden'}
            animate={'show'}
            transition={{type: 'spring', stiffness: 500, damping: 100, delay: 1.5}}/>

        </div>
        <div id='2' className='section introduction'>

          <motion.p className='second-text'
            animate={animateRed ? { opacity: 1, x: 0 } : { opacity: 0, x:'5rem' }}
            viewport={{ once: true }}>

            Paragraph of text describing myself, summarizing my <motion.span animate={{color: colorValue}} transition={{duration: textColorSpeed / 1000}}>experience</motion.span> and skills.
          </motion.p>

          <motion.img className='red-planet' src={RedPlanet} alt='red planet'
            variants={RedPlanetVarients}
            animate={'show'}
            transition={{type: 'spring', stiffness: 500, damping: 100, delay: 0.5}}/>

        </div>
        <div id='3' className='section carousel-section'>
          {/* <LinkCard beginAnimate={animatedBlack} /> */}

          <motion.img className='black-hole' src={BlackHole} alt='black hole'
            variants={BlackHoleVarients}
            animate={'show'}
            transition={{type: 'spring', stiffness: 500, damping: 100, delay: 1}}/>
          
          <LinkCarousel beginAnimate={animatedBlack}/>
        </div>

        <div id='4' className='section contact'>

          <motion.div className='section contact-info'
            variants={ContactVarients}
            animate={'show'}
          >

            Get in touch
            <br/>
            email@email.com
            <div className='icons'>
              <img src={Git} alt='github' />
              <img src={Email} alt='email' />
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;