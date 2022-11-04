import React, { useEffect, useState } from 'react'
import Slot from '../Art/ScrollIndicator.svg'
import Dot from '../Art/IndicatorDot.svg'
import { motion } from "framer-motion"

export default function PageIndicator(props) {
  const [dotPosition, setDotPosition] = useState(1);

  useEffect(() => {
    const updateIndicator = () => {
      let scroll = window.scrollY;
      let limit = (Math.max( document.body.scrollHeight, document.body.offsetHeight, 
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight )) - window.innerHeight;
      let perc = scroll/limit;
      console.log(perc)

      if(perc < 0.15){
        setDotPosition(1);
      }

      if(perc > 0.30){
        setDotPosition(2);
        props.setAnimateRed(true);
      }

      if(perc > 0.70){
        setDotPosition(3);
        props.setAnimatedBlack(true);
      }

      if(perc > 0.93){
        setDotPosition(4);
        props.setAnimatedContact(true);
      }
    }

    window.addEventListener('scroll', updateIndicator);

    return () => window.removeEventListener('scroll', updateIndicator);
  }, []);

  const indicatorVarietns = {
    hidden: { x: '-100%' },
    show: { x: 0 }
  }

  return (
    <motion.div className='scroll-indicator item-2'
      variants={indicatorVarietns}
    >
      <motion.img
        style={{
          gridRowStart: dotPosition,
          gridRowEnd: dotPosition
        }}
        layout
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        src={Dot}
        alt='dot'
        />
        <img className='slot-1' src={Slot} alt='slot'/>
        <img className='slot-2' src={Slot} alt='slot'/>
        <img className='slot-3' src={Slot} alt='slot'/>
        <img className='slot-4' src={Slot} alt='slot'/>
    </motion.div>
  )
}