import React, { useState, useEffect } from 'react'
import LeftArrow from '../Art/LeftArrow.svg'
import RightArrow from '../Art/RightArrow.svg'
import LinkCard from '../Components/LinkCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function LinkCarousel(props) {

    const projects = [
      {
        title: 'Portfolio',
        text: 'The page you are on now!',
        skills: ['Javascript', 'HTML', 'CSS', 'React', 'Framer Motion'],
        link: 'https://davidschaar.netlify.app/'
      },
      {
        title: 'Pen Pals',
        text: 'Drawing focused social media platform.',
        skills: ['Javascript', 'HTML', 'CSS', 'React', 'Sass', 'Framer Motion', 'Firebase'],
        link: 'https://penpals.netlify.app/'
      },
      {
        title: 'Deck Market',
        text: 'Fast paced investment simulation game. Try to reach $1M withoutgoing bankrupt!',
        skills: ['Javascript', 'HTML', 'CSS', 'React', 'Sass', 'React-Spring'],
        link: 'https://deckmarket.netlify.app/'
      },
    ];
    const [index, setIndex] = useState(0);
    const [slideRight, setSlideRight] = useState(true);

    const next = () => {
      setSlideRight(true);
      setIndex(index + 1 < projects.length ? index + 1 : 0);
    }

    const prev = () => {
      setSlideRight(false);
      setIndex(index - 1 >= 0 ? index - 1 : projects.length - 1);
    }

    //better understanding of the custom prop for animate presence.
    //wasn't working because it needed to be in a varient, not hard coded.
    // https://www.youtube.com/watch?v=8W3hbjnuppA

    const varient = {
        enter: () => ({
          opacity: 0, x: slideRight === true ? '100%' : '-100%' //enter uses state, otherwise it only triggers false.
        }),
        show: {
          opacity: 1, x: 0
        },
        exit: (direction) => ({
          opacity: 0, x: direction === true ? '-100%' : '100%' //this one uses 'custom' prop in animate presence.
        })
      }
    
  return (
    <motion.div className='carousel'
      animate={props.beginAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x:'5rem' }}
      transition={{delay: 0.5}}
      viewport={{ once: true }}>
        
      <button className='left-button' onClick={prev}>
        <img src={LeftArrow} />    
      </button>
      <div className='link-card-container'>
        <AnimatePresence
          mode='wait'
          custom={slideRight}>

          <LinkCard
            key={index}
            cardData={projects[index]}
            varients={varient}
            custom={slideRight}
          />
        </AnimatePresence>
      </div>
      <button className='right-button' onClick={next}>
        <img src={RightArrow} />    
      </button>        
    </motion.div>
  )
}