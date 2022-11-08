import React from 'react'
import { motion } from 'framer-motion';


export default function LinkCard(props) {
 
  const openLink = () => {
    window.open(props.cardData.link, '_blank')
  }

  return (
      <motion.div className='link-card'
        variants={props.varients}
        initial='enter'
        animate='show'
        exit='exit'
        transition={{duration: 0.2}}>
          <div className='blue-corner'></div>
          <div className='pink-corner'></div>
          <div className='card-content'>
              <h2 className='link-title'>{props.cardData.title}</h2>
              <p className='link-text'>{props.cardData.text}</p>
              <div className='link-tools'>
              {props.cardData.skills.map((skill, i) => (
                <div key={i}>{skill}</div>
              ))}
              </div>
              <button className='link-button' onClick={openLink}>Link</button>
          </div>
      </motion.div>
  )
}