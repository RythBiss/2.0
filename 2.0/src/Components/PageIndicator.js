import React, { useEffect } from 'react'
import Slot from '../Art/ScrollIndicator.svg'
import Dot from '../Art/IndicatorDot.svg'

export default function PageIndicator() {

    useEffect(() => {
        const updateIndicator = () => {
            console.log(window.scrollY)
        }

        window.addEventListener('scroll', updateIndicator);

        return () => window.removeEventListener('scroll', updateIndicator);
    }, []);

  return (
    <div className='scroll-indicator item-2'>
        <img className='dot' src={Dot} alt='dot'/>
        <img className='slot-1' src={Slot} alt='slot'/>
        <img className='slot-2' src={Slot} alt='slot'/>
        <img className='slot-3' src={Slot} alt='slot'/>
        <img className='slot-4' src={Slot} alt='slot'/>
    </div>
  )
}
