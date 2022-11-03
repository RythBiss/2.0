import React, { useEffect, useRef, useState } from 'react'
import Slot from '../Art/ScrollIndicator.svg'
import Dot from '../Art/IndicatorDot.svg'
import { motion } from "framer-motion"

export default function PageIndicator() {
  const dotRef = useRef(null)
  const [dotPosition, setDotPosition] = useState(1);

  useEffect(() => {
      const updateIndicator = () => {
          let scroll = window.scrollY;
          let limit = (Math.max( document.body.scrollHeight, document.body.offsetHeight, 
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight )) - window.innerHeight;
          let perc =scroll/limit;

          if(perc < 0.38){
            setDotPosition(1);
          }

          if(perc > 0.38){
            setDotPosition(2);
          }

          if(perc > 0.75){
            setDotPosition(3);
          }

          if(perc > 0.98){
            setDotPosition(4);
          }
      }

      window.addEventListener('scroll', updateIndicator);

      return () => window.removeEventListener('scroll', updateIndicator);
  }, []);

  return (
    <div className='scroll-indicator item-2'>
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
        ref={dotRef}
        src={Dot}
        alt='dot'
        />
        <img className='slot-1' src={Slot} alt='slot'/>
        <img className='slot-2' src={Slot} alt='slot'/>
        <img className='slot-3' src={Slot} alt='slot'/>
        <img className='slot-4' src={Slot} alt='slot'/>
    </div>
  )
}