import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {

  const [collapseMenu, setCollapseMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const scrollToPercent = (percent) => {
    let limit = (Math.max( document.body.scrollHeight, document.body.offsetHeight, 
      document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight )) - window.innerHeight;
      window.scrollTo({top: (percent * limit), behavior: 'smooth'});
  }

  const toggleMenu = () => {
    if(collapseMenu == true){
      setOpenMenu(!openMenu);
    }
  }
  
  const scrollToTop = () => {
    scrollToPercent(0);
    toggleMenu();
  }

  const scrollToIntroduction = () => {
    scrollToPercent(0.40);
    toggleMenu();
  }

  const scrollToCarousel = () => {
    scrollToPercent(0.9);
    toggleMenu();
  }

  const scrollToContact = () => {
    scrollToPercent(1);
    toggleMenu();
  }

  const menuSVG = 
  <svg className='menu-SVG' width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="2" y1="2" x2="30" y2="2" stroke="#FAFAFA" strokeWidth="4" strokeLinecap="round"/>
    <line x1="2" y1="14" x2="30" y2="14" stroke="#FAFAFA" strokeWidth="4" strokeLinecap="round"/>
    <line x1="2" y1="26" x2="30" y2="26" stroke="#FAFAFA" strokeWidth="4" strokeLinecap="round"/>
  </svg>;

useEffect(() => {
  const getWidth = (e) =>{
    setCollapseMenu(window.innerWidth < 1024 ? true : false)
  }

  window.addEventListener('resize', getWidth);

  getWidth();
  return () => window.removeEventListener('resize', getWidth);
}, []);

const headerVarients = {
  hidden: { y: '-100%' },
  show: { y: 0 }
}

const menuButtonVarients={
  hover: {backgroundColor: '#41238181', scale: 1.1},
  tap: {backgroundColor: '#412381c9', scale: 1}
}

  return (
    <motion.div className='header item-1'
      variants={headerVarients}
    >
      <div className='header-title'>David <span style={{fontWeight: '300'}}>Schaarschmidt</span></div>
      {collapseMenu === true ?
      <>
        <button onClick={toggleMenu} className='menu-icon'>{menuSVG}</button>
        <AnimatePresence>
        {openMenu &&
            <motion.div className='opened-menu'
              initial={{ x:  '100%'}}
              animate={{ x: '0' }}
              exit={{ x: '100%' }}
              transition={{type: 'tween', duration: 0.2}}>

              <motion.button onClick={scrollToTop}
                variants={menuButtonVarients}
                whileHover={'hover'}
                whileTap={'tap'}
              >Home</motion.button>

              <motion.button onClick={scrollToIntroduction}
                variants={menuButtonVarients}
                whileHover={'hover'}
                whileTap={'tap'}
              >About</motion.button>

              <motion.button onClick={scrollToCarousel}
                variants={menuButtonVarients}
                whileHover={'hover'}
                whileTap={'tap'}
              >Projects</motion.button>

              <motion.button onClick={scrollToContact}
                variants={menuButtonVarients}
                whileHover={'hover'}
                whileTap={'tap'}
              >Contact</motion.button>

            </motion.div>
          }
        </AnimatePresence>
      </>
      :
        <div className='expanded-menu'>
          
          <motion.button onClick={scrollToTop}
                variants={menuButtonVarients}
                whileHover={'hover'}
                whileTap={'tap'}
              >Home</motion.button>

              <motion.button onClick={scrollToIntroduction}
                variants={menuButtonVarients}
                whileHover={'hover'}
                whileTap={'tap'}
              >About</motion.button>

              <motion.button onClick={scrollToCarousel}
                variants={menuButtonVarients}
                whileHover={'hover'}
                whileTap={'tap'}
              >Projects</motion.button>

              <motion.button onClick={scrollToContact}
                variants={menuButtonVarients}
                whileHover={'hover'}
                whileTap={'tap'}
              >Contact</motion.button>
          
        </div>
      }
    </motion.div>
  )
}