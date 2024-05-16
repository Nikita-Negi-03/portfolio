import React, {useEffect, useState} from 'react'
import Welcome from './welcome'
import ChatApp from './chatApp'
import FoodApp from './foodApp'
import Projetcs from './Projetcs'
import Header from './Header'
import SignCanvas from './SignCanvas'

const ProjectContainer = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  const handleClick = (index) => {
    if(index!==activeIndex){
      setActiveIndex(index);
      setFlip(!flip);
    }
  };


  return (
    <div className={`card-container ${flip ? 'flipped' : ''} cursor-container`}>
      <div />
        <div className="card">
              <div className='header'>
                <Header handleClick={handleClick} />
              </div>
              <div className={`content ${activeIndex === 0 ? 'active' : ''}`}>
                  <Welcome />
              </div>
              <div className={`content ${activeIndex === 1 ? 'active' : ''}`}>
                  <ChatApp />
              </div>
              <div className={`content ${activeIndex === 2 ? 'active' : ''}`}>
                  <FoodApp />
              </div>
              <div className={`content ${activeIndex === 3 ? 'active' : ''}`}>
                  <SignCanvas />
              </div>
              <div className='project-list'>
                  <Projetcs handleClick={handleClick} />
              </div>
            </div>
        
    </div>
  )
}

export default ProjectContainer