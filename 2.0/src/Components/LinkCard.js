import React from 'react'

export default function LinkCard() {
  return (
    <div className='link-card'>
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
    </div>
  )
}
