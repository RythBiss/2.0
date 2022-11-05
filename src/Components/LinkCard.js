import React from 'react'
import { motion } from 'framer-motion';


export default function LinkCard(props) {
  return (
    <motion.div className='link-card'
      animate={props.beginAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x:'5rem' }}
      transition={{delay: 0.5}}
      viewport={{ once: true }}
    >
        <div className='blue-corner'></div>
        <div className='pink-corner'></div>
        <div className='card-content'>
            <h2 className='link-title'>Project Title</h2>
            <p className='link-text'>Brief description of project describing goal of the project.</p>
            <div className='link-tools'>
                <div>HTML</div>
                <div>CSS</div>
                <div>Javascript</div>
                <div>React</div>
            </div>
            <button className='link-button'>Link</button>
        </div>
    </motion.div>
  )
}
