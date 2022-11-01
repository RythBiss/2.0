import React from 'react'

export default function Header() {

  const menuSVG = 
  <svg className='menu-SVG' width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="2" y1="2" x2="30" y2="2" stroke="#FAFAFA" strokeWidth="4" strokeLinecap="round"/>
    <line x1="2" y1="14" x2="30" y2="14" stroke="#FAFAFA" strokeWidth="4" strokeLinecap="round"/>
    <line x1="2" y1="26" x2="30" y2="26" stroke="#FAFAFA" strokeWidth="4" strokeLinecap="round"/>
  </svg>;

  return (
    <div className='header item-1'>
      <div className='header-title'>David <span style={{fontWeight: '300'}}>Schaarschmidt</span></div>
      <button className='menu-icon'>{menuSVG}</button>
    </div>
  )
}