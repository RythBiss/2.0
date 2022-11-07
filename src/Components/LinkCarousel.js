import React, { useState, useEffect } from 'react'
import LeftArrow from '../Art/LeftArrow.svg'
import RightArrow from '../Art/RightArrow.svg'
import LinkCard from '../Components/LinkCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function LinkCarousel(props) {

    const projects = [{title: 'Deck Market', text: 'Fast paced investment simulation game. Try to reach $1M withoutgoing bankrupt!', skills: ['Javascript', 'HTML', 'CSS', 'React', 'Sass', 'React-Spring']}, {title: 'Pen Pals', text: 'Drawing focused social media platform.', skills: ['Javascript', 'HTML', 'CSS', 'React', 'Sass', 'Framer Motion', 'Firebase'] }];
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(true);

    const next = () => {
        setIndex(index + 1 < projects.length ? index + 1 : 0);
        setDirection(true);
    }

    const prev = () => {
        setIndex(index - 1 >= 0 ? index - 1 : projects.length - 1);
        setDirection(false);
    }

    // https://www.youtube.com/watch?v=8W3hbjnuppA

    const varient = {
        enter: () => ({
          opacity: 0, x: direction ? '-100%' : '100%'
        }),
        show: () => ({
          opacity: 1, x: 0
        }),
        exit: () => ({
          opacity: 0, x: direction ? '100%' : '-100%'
        })
      }    
    
  return (
    <motion.div className='carousel'
        animate={props.beginAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x:'5rem' }}
        transition={{delay: 0.5}}
        viewport={{ once: true }}
    >
        <button className='left-button' onClick={prev}>
            <img src={LeftArrow} />    
        </button>
        <AnimatePresence mode='wait' custom={index} initial={false}>
            <LinkCard key={index} cardData={projects[index]} varients={varient} custom={index} />
        </AnimatePresence>
        <button className='right-button' onClick={next}>
            <img src={RightArrow} />    
        </button>        
    </motion.div>
  )
}